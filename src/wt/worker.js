import { workerData, BroadcastChannel } from 'node:worker_threads';
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const bc = new BroadcastChannel('chanel1');
    // if (workerData%2 == 0) {
    //    return bc.postMessage({id: workerData, result: nthFibonacci(workerData)});
    // }
    // throw new Error
    bc.postMessage({id: workerData, result: nthFibonacci(workerData)});
};

sendResult();