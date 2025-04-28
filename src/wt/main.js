import path from 'path';
import { fileURLToPath } from 'url';
import {availableParallelism} from 'os';
import { Worker } from 'worker_threads';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const WORKER_PATH = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    const availableCores = availableParallelism();
    const workers = [];
    for (let i = 0; i < availableCores; i += 1) {
        workers.push(workerFactory(i + 10));
    }
    const result = await Promise.allSettled(workers).then((res) =>
        res.map((obj) => obj.value));
    
    console.log(result);
    
};

const workerFactory = (n) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(WORKER_PATH, {workerData: n});
        worker.on("message", (msg) => resolve(msg));
        worker.on("error", (err) => reject(err));
    })
}

await performCalculations();