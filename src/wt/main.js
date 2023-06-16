import { Worker } from 'node:worker_threads';
import os from 'node:os';
import { resolve } from 'node:path';
import { getPath } from '../fs/utils.js';

const performCalculations = async () => {
    const __dirname = getPath(import.meta.url);
    const filePath = resolve(__dirname, 'worker.js');

    const workerArr = Array
        .from({ length: os.cpus().length }, (_, i) => i + 10)
        .map(async(num) => {
            const worker = new Worker(filePath, { workerData: { num }});
            return new Promise(resolve => {
                worker.on('message', res => resolve({ status: 'resolved', data: res }));
                worker.on('error', () => resolve({ status: 'error', data: null }));
            });
        });

    console.log(await Promise.all(workerArr));
};

await performCalculations();