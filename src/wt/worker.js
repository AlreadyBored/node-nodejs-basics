import { workerData, parentPort } from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    try {
        const value = nthFibonacci(workerData);
        parentPort.postMessage({ status: "resolved", data: value });
      } catch (e) {
        parentPort.postMessage({ status: "error", data: null });
      }
};
sendResult();