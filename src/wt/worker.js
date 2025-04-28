import { parentPort } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if (!parentPort) {
        throw new Error('This file must be run as a Worker thread');
    }

    parentPort.on('message', (n) => {
        const result = nthFibonacci(n);
        parentPort.postMessage(result);
    });
};

sendResult();
