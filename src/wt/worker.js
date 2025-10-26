import { parentPort, workerData } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const n = Number(workerData);
  if (!Number.isFinite(n)) throw new Error('Invalid input for Fibonacci');
  const result = nthFibonacci(n);
  parentPort.postMessage(result);
};

sendResult();
