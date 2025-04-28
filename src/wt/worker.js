import { parentPort, workerData } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    try {
        if (typeof workerData !== 'number') throw new Error('Invalid input');

        const result = nthFibonacci(workerData);
        parentPort.postMessage({
            status: 'resolved',
            data: result
        });
    } catch (error) {
        parentPort.postMessage({
            status: 'error',
            data: null
        });
    }
};

sendResult();
