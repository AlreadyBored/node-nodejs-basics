import path, { resolve } from 'path';
import url from 'node:url';
import { Worker } from 'node:worker_threads';
import os from 'node:os';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerFilePath = path.join(__dirname, 'worker.js');
const numberOfLocalCores = os.cpus().length;

const createWorker = (data) => new Promise((resolve, reject) => {
    const worker = new Worker(workerFilePath, {
        workerData: data
    });

    worker.on('message', (msg) => {
        if (msg.status === 'resolved') {
            resolve({ status: 'resolved', data: msg.data });
        } else if (msg.status === 'error') {
            reject({ status: 'error', data: null });
        } else {
            reject({ status: 'unknown', data: null });
        }
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

const performCalculations = async () => {
    const workersArr = [];

    for (let i = 0; i < numberOfLocalCores; i++) {
        workersArr.push(createWorker(i + 10));
    }

    const res = await Promise.all(workersArr);
    console.log(res);
};

await performCalculations();