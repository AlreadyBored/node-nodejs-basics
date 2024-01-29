import { Worker, isMainThread } from 'node:worker_threads';
import path from 'node:path';
import os from 'os';

const performCalculations = async () => {
    if (!isMainThread) return;

    const fileName = path.join(process.cwd(), 'src/wt/worker.js');

    function createWorker(workerData) {
        return new Promise(function (resolve, reject) {
            const worker = new Worker(fileName, {
                workerData,
            });
            worker.on('message', (data) => {
                resolve({ status: 'resolved', data });
                worker.terminate();
            });
            worker.on('error', (msg) => {
                reject({ status: 'error', data: null });
                worker.terminate();
            });
        });
    }

    const workerThreads = [];

    for (let i = 0; i < os.cpus().length; i++) {
        workerThreads.push(createWorker(10 + i));
    }
    const results = await Promise.all(workerThreads);
    console.log(results);
};

await performCalculations();
