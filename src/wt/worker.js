import { parentPort, workerData } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (res) => {
    parentPort.postMessage(res);
};

const result = nthFibonacci(workerData.n);

sendResult(result);

parentPort.on('message', (data) => {
    const result = nthFibonacci(data.n);
    sendResult(result);
});