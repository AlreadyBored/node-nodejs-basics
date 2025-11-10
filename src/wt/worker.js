// n should be received from main thread
import { parentPort, workerData } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  if (typeof workerData !== 'number' || Number.isNaN(workerData)) {
    throw new Error('Invalid workerData: expected a number');
  }
  const result = nthFibonacci(workerData);
  parentPort.postMessage(result);
};

sendResult();
