import { workerData, parentPort } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const number = workerData.number;
    const result = nthFibonacci(number);
    parentPort.postMessage(result);
};

sendResult();