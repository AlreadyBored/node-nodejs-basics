import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

export const performCalculations = async () => {
    const INIT_NUMBER = 10;
    const workerFile = join(dirname(fileURLToPath(import.meta.url)), 'worker.js');
    const arrCPUs = cpus();
    const workers = [];

    for (let i = 0; i < arrCPUs.length; i++) {
        workers[i] = new Promise((resolve, reject) => {
            const worker = new Worker(workerFile, { workerData: INIT_NUMBER + i });
            worker.on('message', (msg) => {
                resolve(msg.result);
            });
        });
    }

    return Promise.all(workers).then((result) => console.log(result));
};

await performCalculations();
