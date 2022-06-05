import { workerData, BroadcastChannel } from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    const bc = new BroadcastChannel('worker');
    bc.postMessage({ status: 'resolved', data: nthFibonacci(workerData) });
    bc.close();
};

sendResult();
