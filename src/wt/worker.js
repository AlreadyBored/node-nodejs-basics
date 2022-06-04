'use strict'

import { parentPort, workerData } from 'worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  const num = workerData;
  if (num % 2) {
    throw new Error(`num is odd!`)
  } else {
    parentPort.postMessage(nthFibonacci(num));
  }
};

sendResult()
