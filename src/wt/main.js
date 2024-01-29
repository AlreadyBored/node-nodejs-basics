import { Worker } from 'worker_threads';
import os from "node:os";
import {fileURLToPath} from "url";
import path from "node:path";

const numberOfCores = os.cpus().length
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const workers = []
    const results = []

    const workerMessageHandler = (index,message) => {
        results[index] = message
    }

    for(let i = 0; i < numberOfCores;i++) {
        const worker = new Worker(path.join(__dirname,'worker.js'), {workerData: 10 + i})
        worker.on('message', (message) => {
            workerMessageHandler(i,message)
        })
        workers.push(worker)
    }

    await Promise.all(workers.map((worker) => new Promise((resolve)=> {
        worker.on('exit', resolve)
    })))

    console.log(results)
};

await performCalculations();
