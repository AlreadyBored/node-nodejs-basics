import { workerData, parentPort } from 'worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  const fibCount = nthFibonacci(workerData);
  parentPort.postMessage(fibCount);
  // This function sends result of nthFibonacci computations to main thread
  // nthFibonacci();
};

sendResult();
