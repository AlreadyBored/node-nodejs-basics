import { cpus } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { isMainThread, Worker } from 'worker_threads';
import * as worker from './worker.js';

export const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);

const workers = [];

export const performCalculations = async () => {
    if(isMainThread) {
        await main();
    } else {
        worker.sendResult();
    }
};

const main = async () => {
    const cpuCount = cpus().length;
    for (let i = 0; i < cpuCount; i++) {
        const worker = runWorker(10 + i);
        workers.push(worker);
    }

    const results = await Promise.allSettled(workers);

    const statusesWithValues = results
        .map(result => ({ 
            status: result.status, 
            value: result.status == 'fulfilled' ? result.value.fibonacci : null 
        }));

    console.log(statusesWithValues);
}

const runWorker = workerData => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(filename);
        worker.postMessage({num: workerData})
        worker.on('message', resolve);
        worker.on('error', reject);
    })
};

await performCalculations();