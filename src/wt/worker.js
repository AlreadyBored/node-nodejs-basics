// worker.js
import { parentPort } from 'worker_threads';

const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = (result) => {
    parentPort.postMessage(result);
};

parentPort.on('message', (event) => {
    const n = event;
    const result = nthFibonacci(n);
    sendResult(result);
});
