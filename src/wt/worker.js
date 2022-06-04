import {workerData, parentPort} from "worker_threads"
// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    let result = nthFibonacci(workerData)
    parentPort.postMessage(result)
    // This function sends result of nthFibonacci computations to main thread
};
//sendResult()