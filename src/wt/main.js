import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'node:worker_threads';
import os from 'node:os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerFilePath = path.join(__dirname, 'worker.js');

const numCores = os.cpus().length;

const runWorker = (data) => new Promise((resolve, reject) => {
    const worker = new Worker(workerFilePath, {
        workerData: data
    });

    worker.on('message', (message) => {
        if (message.status === 'resolved') {
            resolve({ status: 'resolved', data: message.data });
        } else {
            reject({ status: 'error', data: null });
        }
    });

    worker.on('error', (error) => {
        reject({ status: 'error', data: null });
    });

    worker.on('exit', (code) => {
        if (code !== 0) {
            reject({ status: 'error', data: null });
        }
    });
});

const performCalculations = async () => {
    const workers = [];

    try {
        for (let i = 1; i <= numCores; i++) {
            workers.push(runWorker(i + 10));
        }

        const result = await Promise.all(workers);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

await performCalculations();
