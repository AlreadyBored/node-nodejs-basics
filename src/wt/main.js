import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';
import os from 'os';

const performCalculations = async () => {
    const createWorker = (workerData) => {
        const __dirname = path.dirname(fileURLToPath(import.meta.url));

        return new Promise((resolve) => {
            const worker = new Worker(path.resolve(__dirname, './worker.js'), {
                workerData,
            });

            worker.on('message', (msg) => {
                resolve(msg);
            });
        });
    };

    const numCores = os.cpus().length;

    const workerPromises = Array.from({ length: numCores }, (_, index) =>
        createWorker(10 + index)
    );

    const results = await Promise.all(workerPromises);

    console.log(results);
};

await performCalculations();