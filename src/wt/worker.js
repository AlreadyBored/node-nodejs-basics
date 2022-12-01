import { workerData, BroadcastChannel } from 'node:worker_threads';
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const bc = new BroadcastChannel('chanel1');
    bc.postMessage({id: workerData, result: nthFibonacci(workerData)});
};

sendResult();