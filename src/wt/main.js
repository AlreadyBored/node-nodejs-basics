import os from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const coresNumber = os.cpus().length;
    const filePath = './src/wt/worker.js';
    const results = [];

    const createWorker = (_, index) => {
        return new Promise((resolve, _reject) => {
            const worker = new Worker(filePath, { workerData: index + 10 });

            worker.on('message', (message) => {
                results[index] = message;
            });

            worker.on('error', () => {
                results[index] = { status: 'error', data: null };
            });

            worker.on('exit', () => {
                resolve();
            });
        });
    };
    const workerPromises = Array.from({ length: coresNumber }, createWorker);

    await Promise.all(workerPromises);
    console.log(results);
};

await performCalculations();
