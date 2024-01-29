import os from 'os';
import { Worker } from 'worker_threads';
import path from 'path';

const numberOfWorkers = os.cpus().length;
const fullPath = path.resolve('src/wt/worker.js');

function createPromise(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(fullPath, { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
    });
}

const performCalculations = async () => {
    const array = [];

    for (let i = 0; i < numberOfWorkers; i++) {
        array.push(createPromise(10 + i));
    }

    await Promise.allSettled(array).then((results) => {
        const consoleResponse = results.map((result) => {
            if (result.status === 'fulfilled') {
                return {
                    status: 'resolved',
                    data: result.value
                };
            } else if (result.status === 'rejected') {
                return {
                    status: 'error',
                    data: null
                };
            }
        });
        console.log(consoleResponse);
    });
};

await performCalculations();