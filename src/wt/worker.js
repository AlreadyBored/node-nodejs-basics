import { parentPort, workerData } from 'node:worker_threads';

const sendResult = () => {
    const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
    parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();