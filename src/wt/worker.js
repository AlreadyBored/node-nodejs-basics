// n should be received from main thread
import { workerData, parentPort } from 'worker_threads';

const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

export const sendResult = () => {
    let data = null;
    let status = 'resolved';
    try {
        data = nthFibonacci(workerData);
    } catch {
        status = 'error';
    }

    parentPort.postMessage({ result: { status, data } });
};

sendResult();
