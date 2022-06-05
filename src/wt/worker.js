import { parentPort, workerData } from 'worker_threads';

export const nthFibonacci = (n = workerData) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    const result = nthFibonacci();

    parentPort.postMessage(result);
};

sendResult();