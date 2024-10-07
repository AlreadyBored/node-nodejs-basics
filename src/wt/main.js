import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { join as pathJoin, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const initNumber = 10;
const statusResolved = 'resolved';
const statusError = 'error';
const workerFile = 'worker.js';
const workerPath = pathJoin(__dirname, workerFile);

const performCalculations = async () => {

    const calculateNthFibonacci = workerData => new Promise(resolve => {
        const runWorker = new Worker(workerPath, { workerData });
        runWorker.on('message', data => resolve({ status: statusResolved, data }));
        runWorker.on('error', data => resolve({ status: statusError, data: null }));
    })

    const cores = cpus();
    const tasks = [];

    for (let index = 0; index < cores.length; ++index) {
        tasks.push(calculateNthFibonacci(index + initNumber));
    }

    const results = await Promise.all(tasks);

    console.log(results);

}

await performCalculations();
