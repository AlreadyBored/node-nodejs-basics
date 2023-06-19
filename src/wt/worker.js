import {
   parentPort,
   workerData
} from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (nth) => {
   // This function sends result of nthFibonacci computations to main thread
   return nthFibonacci(nth);
};

parentPort.postMessage(sendResult(workerData.nth));