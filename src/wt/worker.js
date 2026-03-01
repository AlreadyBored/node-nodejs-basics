import { parentPort } from 'node:worker_threads';

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

let lastResult = null;

const sendResult = () => {
  if (parentPort && lastResult !== null) {
    parentPort.postMessage(lastResult);
  }
};

if (parentPort) {
  parentPort.on('message', (n) => {
    try {
      const fib = nthFibonacci(n);
      lastResult = { status: 'resolved', data: fib };
      sendResult();
    } catch (err) {
      lastResult = { status: 'error', data: null };
      sendResult();
    }
  });
}

sendResult();
