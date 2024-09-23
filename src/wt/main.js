import { Worker } from 'node:worker_threads';
import path from 'path';
import os from 'node:os';

import { getDirPath } from '../utils/getDirPath.js';


const createWorker = (filePath, workerData) => {
    return new Promise((resolve) => {
        const worker = new Worker(filePath, { workerData });

        worker.on('message', (val) => {
            resolve({
                status: 'resolved',
                data: val,
            })
        });

        worker.on('error', () => {
            resolve({
                status: 'error',
                data: null
            })
        });
    });
}

const performCalculations = async () => {
    const dirPath = getDirPath(import.meta.url);
    const filePath = path.join(dirPath, 'worker.js');
    const cpuAmount = os.availableParallelism();
    const initialValue = 10;
    const workers = Array.from({ length: cpuAmount }, (_, index) => {
        return createWorker(filePath, initialValue + index);
    })

    return Promise.all(workers)
}

performCalculations().then(console.log);