import os from 'os';
import  path from 'path';
import { Worker } from 'worker_threads';
const performCalculations = async () => {
    const filePath = path.join(import.meta.dirname, 'worker.js');
    const numWorkers = os.cpus().length;
    const results = [];

    const runWorker = (n) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(filePath);
            worker.postMessage(n);

            worker.on('message', (result) => {
                resolve({ status: 'resolved', data: result });
            });

            worker.on('error', (err) => {
                reject({ status: 'error', data: null });
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    reject({ status: 'error', data: null });
                }
            });
        });
    }


    for (let i = 0; i < numWorkers; i++) {
        const n = 10 + i;
        try {
            const result = await runWorker(n);
            results.push(result);
        } catch (err) {
            results.push({ status: 'error', data: null });
        }

    }

    console.log(results);
    process.exit();
};

await performCalculations();