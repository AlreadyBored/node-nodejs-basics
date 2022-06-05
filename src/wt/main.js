import { resolve as pathResolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';
import { Worker } from 'worker_threads';

export const performCalculations = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    let workers = cpus().map((_, idx) => {
        return new Promise((resolve) => {
            const worker = new Worker(pathResolve(__dirname, './worker.js'), {workerData: idx += 10});
            worker.on('message', (message) => resolve({ status: 'resolved', data: message }));
            worker.on('err', () => resolve({ status: 'error', data: null }));
        })
    });

    Promise.allSettled(workers).then(resp => {
        const result = resp.map(el => el.value);
        console.log(result);
    });
};

performCalculations();