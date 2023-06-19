import { parentPort } from 'worker_threads';

// Memoization cache
const memo = new Map();

// n should be received from main thread
const nthFibonacci = (n) => {
  if (memo.has(n)) {
    return memo.get(n);
  }

  const result = n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
  memo.set(n, result);
  return result;
};

const sendResult = (n) => {
  const result = nthFibonacci(n);
  parentPort.postMessage(result);
};

parentPort.on('message', sendResult);
