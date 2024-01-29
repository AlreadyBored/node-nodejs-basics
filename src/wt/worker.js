const { parentPort, workerData } = require('worker_threads');

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const inputN = workerData;
  const result = nthFibonacci(inputN);
  parentPort.postMessage(result);

};

sendResult();
