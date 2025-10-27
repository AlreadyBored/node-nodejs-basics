import { parentPort, workerData } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

let currentN = workerData;

const sendResult = () => {
  if (currentN === undefined) {
    return;
  };

  const n = Number(currentN);
  const result = nthFibonacci(n);
  parentPort.postMessage(result);
};

if (parentPort) {
  parentPort.on('message', (n) => {
    currentN = n;
    sendResult();
  });
}

sendResult();
