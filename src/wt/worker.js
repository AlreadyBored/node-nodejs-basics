import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = (n) => {
  if (typeof n !== 'number' || n < 0) {
    throw new Error('Input must be a non-negative integer');
  }
  return n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

const sendResult = () => {
  try {
    const result = nthFibonacci(workerData);
    parentPort.postMessage(result);
  } catch (error) {
  
    parentPort.postMessage({ error: error.message });
  }
};

sendResult();
