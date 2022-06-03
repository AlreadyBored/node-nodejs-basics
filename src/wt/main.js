import {fileURLToPath} from 'node:url';
import path from 'node:path';
import os from 'node:os';
import {Worker} from 'node:worker_threads';

export const performCalculations = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const workerPath = path.join(__dirname, 'worker.js');

    const CPUcount = os.cpus().length;

    const workerPromises = [...new Array(CPUcount)].map((value, index) => new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, {workerData: 10 + index + 1});
        worker.on('message', resolve);
        worker.on('error', reject);
    }));

    return Promise.all(workerPromises);
};

console.log(await performCalculations());