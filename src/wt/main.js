import os from 'os';
import { Worker } from 'worker_threads';
import path from 'path';

const performCalculations = async () => {
    const result = await Promise.all(os.cpus().map(
        (_, i) => new Promise(
            (resolve, reject) => {
                const worker = new Worker(path.resolve('src', 'wt', 'worker.js'), { workerData: i + 10});
                worker.on('message', (message) => resolve({status: 'resolved', data: message}));
                worker.on('error', reject);
            }
        ))
    )
    console.log(result);
};

await performCalculations();