import { cpus } from 'node:os'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Worker } from 'worker_threads';

const workerScriptPath = dirname(fileURLToPath(import.meta.url)) + '/worker.js';
const performCalculations = async () => {
    const workers = [];

    for (let nth = 10; nth < cpus().length + 10; nth++) {
        const workerThread = new Promise((resolve, reject) => {
            let value;

            const worker = new Worker(workerScriptPath, {
                workerData: { incrementalNumber: nth },
            });

            worker.on('message', (result) => {
                value = result;
            });

            worker.on('error', (error) => reject(error));

            worker.on('exit', () => resolve(value));
        });

        workers.push(workerThread);
    }

    const calculatedValues = await Promise.allSettled(workers);

    calculatedValues.forEach((fibonacciValue) => {
        const { status, value = null } = fibonacciValue;
        console.log({
            status: status === 'fulfilled' ? 'resolved' : 'error',
            value: value,
        });
    });
};

await performCalculations();
