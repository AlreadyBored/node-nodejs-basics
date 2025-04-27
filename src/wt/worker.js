import {isMainThread, Worker, workerData, parentPort} from 'worker_threads';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (val) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(__filename, { workerData: val });

        worker.on('message', (result) => {
            resolve({ status: 'resolved', data: result });
        });

        worker.on('error', (err) => {
            resolve({ status: 'error', data: null });
        });

        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
};

if (!isMainThread) {
    const res = nthFibonacci(workerData);
    parentPort.postMessage(res);
}
