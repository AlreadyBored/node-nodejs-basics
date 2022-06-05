import { workerData, BroadcastChannel, threadId } from 'worker_threads';

const bc = new BroadcastChannel('fibonacci');

export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
export const sendResult = () => {
  bc.postMessage({ status: 'resolved', data: nthFibonacci(workerData) });
  bc.close();
};

sendResult();
