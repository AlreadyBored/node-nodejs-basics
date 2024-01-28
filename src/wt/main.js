import { getFilePath } from '../utils/fs.js';
import { Worker } from 'node:worker_threads';
import { cpus as cp } from 'node:os';

const workerPath = getFilePath(import.meta.url, 'worker.js');

const performCalculations = async () => {
    let n = 10;
    const cpus = cp();

    const workersResult = await Promise.allSettled(
        cpus.map(p => {
            return new Promise((resolve, reject) => {

                const worker = new Worker(workerPath, {
                    workerData: n++,
                });

                worker.on('message', msg => resolve(msg));
                worker.on('error', err => reject(err));

            });
        })
    );

    workersResult.map(({ status, value }) => {
        if (status === 'rejected') {
            console.log({ status: 'error', data: null });
        }
        if (status === 'fulfilled') {
            console.log({ status: 'resolved', data: value });
        }
    });
};

await performCalculations();