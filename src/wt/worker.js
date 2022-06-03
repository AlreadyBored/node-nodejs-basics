import {parentPort, workerData} from 'node:worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread?
    try {
        const value = nthFibonacci(workerData);
        parentPort.postMessage({
            status: 'resolved',
            data: value,
        });
    } catch (error) {
        parentPort.postMessage({
            status: 'error',
            data: null,
        });
    }
};

sendResult();
