import { Worker } from 'worker_threads';
import os from 'os';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const DIRNAME = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
    const numCores = os.cpus().length;
    const baseValue = 10;
    const tasks = [];

    for (let i = 0; i < numCores; i++) {
        const n = baseValue + i;

        tasks.push(new Promise(resolve => {
            const worker = new Worker(join(DIRNAME, 'worker.js'));

            worker.once('message', result => resolve({status: 'resolved', data: result}));
            worker.once('error', () => resolve({status: 'error', data: null}));
            worker.once('exit', code => {
                if (code !== 0) {
                    resolve({status: 'error', data: null});
                }
            });

            worker.postMessage(n);
        }));
    }

    const results = await Promise.all(tasks);
    console.log(results);
};

await performCalculations();
