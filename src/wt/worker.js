import {
    parentPort,
    workerData
} from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    try {
        parentPort.postMessage({ status: 'resolved', date: nthFibonacci(workerData) });
    } catch (e) {
        parentPort.postMessage({ status: 'error', date: null });
    }
};

sendResult();