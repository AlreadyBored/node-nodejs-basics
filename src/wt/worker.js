import wt from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  wt.parentPort.once('message', (msg) => wt.parentPort.postMessage(nthFibonacci(msg)));
};

sendResult();