import { workerData, parentPort } from 'worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
        const result = nthFibonacci(workerData)
        parentPort.postMessage(result)
        process.exit(0)
};

// sendResult();

