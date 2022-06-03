import url from 'url';
import path from 'path';
import os from 'os';
import { Worker } from 'worker_threads';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const performCalculations = async () => {
    try {
        const valueCPUS = os.cpus().length;
        const arr = [];

        for (let i = 0; i < valueCPUS; i++) {
            const workerPromise = new Promise((resolve) => {
                const worker = new Worker(path.join(__dirname, 'worker.js'), {
                    workerData: 10 + i
                });
                worker.on('message', (data) => {
                    resolve({status: 'resolved', data});
                })
                worker.on('error', () => {
                    resolve({status: 'error', data: null});
                })
            })
            arr.push(workerPromise);
        }
        const result = await Promise.all(arr);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
};