// n should be received from main thread
import { workerData } from "worker_threads";

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    return nthFibonacci(workerData);
};
sendResult();