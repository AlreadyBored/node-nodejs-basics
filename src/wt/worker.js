import { parentPort, workerData } from 'node:worker_threads';

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const calcResult = nthFibonacci(workerData);
  parentPort.postMessage(calcResult);
};

sendResult();
