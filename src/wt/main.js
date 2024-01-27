import os from 'os';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const number = 10;
const numCores = os.cpus().length;
const currentFolder = dirname(fileURLToPath(import.meta.url));
const childWorkerPath = path.join(currentFolder, 'worker.js');

const performCalculations = async () => {
    const res = [];

    for (let i = 0; i < numCores; i++) {

        const worker = new Worker(childWorkerPath, {workerData: number + i});
    
        worker.on('message', (msg) => {
            res[i] = {status: 'resolved', data: msg};
            if (res.length === 4) {
                console.log(res);
            }
        });
        worker.on('error', () => {
            res[i] = {status: 'error', data: null};
            if (res.length === 4) {
                console.log(res);
            }
        });

    }
};

await performCalculations();