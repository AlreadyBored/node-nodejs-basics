import { parentPort, workerData } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    try {
        const n = workerData;
        const result = nthFibonacci(n);
        parentPort.postMessage(result);
    } catch (error) {
        parentPort.postMessage(null);
    }
};

sendResult();
