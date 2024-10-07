import { parentPort } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.on('message', (number) => {
    try {
      const result = nthFibonacci(number);
      parentPort.postMessage({ status: 'resolved', data: result });
    } catch (error) {
      parentPort.postMessage({ status: 'error', data: null });
    }
  });
};

sendResult();