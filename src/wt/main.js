import {Worker, isMainThread, parentPort, workerData} from "node:worker_threads";
import path from 'path';
import os from 'os';

const userCPUCount = os.cpus().length;
const workerPath = path.resolve("./src/wt/worker.js");

const calculate = number => {
    
    return new Promise(async (parentResolve, parentReject) => {
        
        const numbers = [...new Array(number)].map((_, i) => i + 1);
        
        const segmentSize = Math.ceil(numbers.length / userCPUCount);
        const segments = [];

        for (let segmentIndex = 0; segmentIndex < userCPUCount; segmentIndex++) {
            
            const start = segmentIndex * segmentSize;
            const end = start + segmentSize;
            const segment = numbers.slice(start, end);
            segments.push(segment);
        }
            const results = await Promise.all(segments.map(segment => new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, {
                workerData: segment
            });
            worker.on("message", resolve);
            worker.on("error", reject);
            worker.on("exit", code => {
                if (code !== 0) reject (new Error(`Worker stopped with exit codde ${code}`));
            });
        })));
        const finalREsult = results.reduce((acc, val) => acc * val, 1);
        console.log(results);
    });
};


const performCalculations = async () => {
    calculate(userCPUCount);
};

await performCalculations();
