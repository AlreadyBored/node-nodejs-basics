import { parentPort } from 'worker_threads';

// n should be received from the main thread
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

// This function sends the result of nthFibonacci computation to the main thread
const sendResult = (n) => {
  const result = nthFibonacci(n);
  parentPort.postMessage(result);
};

// Listen for messages from the main thread
parentPort.on('message', (n) => {
  sendResult(n);
});
