import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
    const filePath = path.resolve(__dirname, 'worker.js');
    const cpus = os.cpus().length;
    const workers = [];
    const results = [];
    let counter = 10;

    const sendToWorker = (worker, data) =>
        new Promise((resolve, reject) => {
            worker.postMessage(data);
            worker.once('message', (result) => {
                if (result.status === 'resolved') {
                    results.push({ status: 'resolved', data: result.data });
                    resolve();
                } else {
                    results.push({ status: 'error', data: null });
                    reject(new Error('Worker error'));
                }
            });
            worker.once('error', (error) => {
                results.push({ status: 'error', data: null });
                reject(new Error('Worker error'));
            });
        });

    for (let i = 0; i < cpus; i++) {
        const worker = new Worker(filePath);
        workers.push(worker);
        await sendToWorker(worker, counter++);
    }

    await Promise.allSettled(
        workers.map((worker, index) => sendToWorker(worker, counter + index))
    );

    console.log(results);

    workers.forEach((worker) => worker.terminate());
};

await performCalculations();
