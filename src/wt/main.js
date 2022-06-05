import { Worker } from 'worker_threads';
import { join } from 'path';
import { cpus } from 'os';
import { getDirAndFilePath } from '../helpers.js';

const { __dirname } = getDirAndFilePath(import.meta);

const STARTS_WITH = 10;

export const performCalculations = async () => {
    const promises = await Promise.allSettled(
        cpus().map((_, idx) => {
            return new Promise((res, rej) => {
                const worker = new Worker(join(__dirname, 'worker.js'), {
                    workerData: idx + STARTS_WITH
                });
                worker.on('message', (data) => {
                    res({ status: 'resolved', data });
                });
                worker.on('error', () => {
                    rej({ status: 'error', data: null });
                });
            });
        })
    );

    return promises.map(promise => promise.value);
};

performCalculations().then(result => {
    console.log(result);
});