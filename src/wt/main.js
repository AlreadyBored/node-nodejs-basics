import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const numCores = cpus().length;
    const workerPath = join(__dirname, 'worker.js');
    const workers = [];
    const results = new Array(numCores);

    const promises = [];

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(workerPath);
        workers.push(worker);

        const promise = new Promise((resolve) => {
            worker.on('message', (result) => {
                results[i] = {
                    status: 'resolved',
                    data: result
                };
                resolve();
            });

            worker.on('error', () => {
                results[i] = {
                    status: 'error',
                    data: null
                };
                resolve();
            });
        });

        promises.push(promise);
        
        worker.postMessage(10 + i);
    }

    await Promise.all(promises);

    await Promise.all(workers.map(worker => worker.terminate()));

    console.log(results);
};

await performCalculations();