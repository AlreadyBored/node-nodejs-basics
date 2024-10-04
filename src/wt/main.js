import { Worker, isMainThread } from 'node:worker_threads';
import os from 'os';
const workerscript = './src/wt/worker.js'

const createWorkers = async (numWorkers) => {
    const workers = [];
    const resultsPromises = [];

    for (let i = 0; i < numWorkers; i++) {
        const worker = new Worker(workerscript);
        workers.push(worker);

        const workerData = 10 + i;  

        const resultPromise = new Promise((resolve) => {
            worker.on('message', (result) => {
                resolve(result);
            });
            worker.postMessage(workerData);
        });

        resultsPromises.push(resultPromise);
    }

    // Wait for all workers to finish and return the results in order
    return Promise.all(resultsPromises);
};

const performCalculations = async () => {

    if (isMainThread) {
        const numCores = os.cpus().length;
        const results = await createWorkers(numCores);

        console.log('Results:', results);
    }
};

await performCalculations();