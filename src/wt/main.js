import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { join } from 'path';

const performCalculations = async () => {
    const coreNumber = cpus().length;
    const filePath = join(import.meta.dirname, 'worker.js');

    const createWorker = (n) => {
        return new Promise((resolve) => {
            const worker = new Worker(filePath);
            worker.postMessage(n);

            worker.on('message', (result) => resolve({ status: 'resolved', data: result }));
            worker.on('error', () => resolve({ status: 'error', data: null }));
            worker.on('exit', (code) => {
                if (code !== 0) {
                    resolve({ status: 'error', data: null });
                }
            });
        });
    };

    const workerPromises = [];

    for (let i = 0; i < coreNumber; i++) {
        workerPromises.push(createWorker(10 + i));
    }

    const workerSettledResults = await Promise.allSettled(workerPromises);
    const workerFormattedResults = workerSettledResults.map((result) =>
        result.status === 'fulfilled' ? result.value : { status: 'error', data: null }
    );

    console.log(workerFormattedResults);
};

await performCalculations();
