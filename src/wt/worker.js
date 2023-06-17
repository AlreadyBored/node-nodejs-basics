import worker from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// if(Math.random() > 0.5) throw new Error('Something went wrong');

const sendResult = () => {
  worker.parentPort.postMessage(nthFibonacci(worker.workerData));
};

sendResult();
