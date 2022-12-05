import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(
    import.meta.url));

export const performCalculations = async() => {
    const threads = os.cpus().length;
    const promises = [];
    for (let i = 0; i < threads; i++) {
        const promise = new Promise((resolve) => {
            const worker = new Worker(path.join(__dirname, 'worker.js'), {
                workerData: 10 + i,
            });
            worker.on('message', resolve);
            worker.on('error', () =>
                resolve({
                    status: 'error',
                    data: null,
                })
            );
        });

        promises.push(promise);
    }
    Promise.all(promises).then((data) => console.log(data));
};
performCalculations();