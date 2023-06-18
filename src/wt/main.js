import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const pathToWorker = path.join(__dirname, 'worker.js');

    const initNumber = 10;

    const promises = cpus().map((_, index) => {
        return new Promise(resolve => {
            const worker = new Worker(pathToWorker, {
                workerData: initNumber + index,
            });

            worker.on('message', (data) => resolve({ status: 'resolved', data }))
            worker.on('error', () => resolve({ status: 'error', data: null }));
        });
    });

    const results = await Promise.all(promises);
    console.log(results);
};

await performCalculations();
