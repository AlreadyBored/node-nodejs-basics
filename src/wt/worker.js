import { parentPort, workerData } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (n) => {
  // This function sends result of nthFibonacci computations to main thread
  const result = nthFibonacci(Number(n));
  parentPort.postMessage(result);  
};

if (workerData !== undefined) {
  sendResult(workerData);
} else {
  parentPort.once('message', sendResult);
}

