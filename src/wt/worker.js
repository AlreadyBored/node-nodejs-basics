import { workerData, parentPort } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const resultFib = nthFibonacci(workerData);

  parentPort.postMessage({ n: workerData, result: resultFib });
};

sendResult();
