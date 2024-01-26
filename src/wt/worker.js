import { isMainThread, parentPort, workerData } from "node:worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  if (!isMainThread) {
    const result = nthFibonacci(workerData);
    parentPort.postMessage(result);
  }
};
