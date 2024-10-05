import { parentPort } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (result) => {
    parentPort.postMessage({
        status: 'resolved',
        data: result
    })
};

parentPort.onmessage = (event) => {
    const n = event.data;

    const result = nthFibonacci(n);
    sendResult(result);
};