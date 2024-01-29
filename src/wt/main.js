import { Worker, isMainThread, parentPort } from 'node:worker_threads';
import * as OS from 'node:os';
import workerFunctions from './worker.js';
const { nthFibonacci, sendResult } = workerFunctions;

const performCalculations = async () => {
    if (isMainThread) {
        const numCores = OS.cpus().length;
        const workerPromises = [];
        for (let i = 0; i < numCores; i++) {
            const worker = new Worker('./worker.js', { workerData: 10 + i });
            const workerPromise = new Promise((resolve) => {
                worker.on('message', (message) => {
                    resolve(message);
            });
          });
            workerPromises.push(workerPromise);
        }
        const results = await Promise.all(workerPromises);
        console.log(results);
    } else {
        const n = parentPort.workerData;
        const result = nthFibonacci(n);
        sendResult(result);
    }
};

await performCalculations();