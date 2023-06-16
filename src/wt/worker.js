/*
extend given function to work with data received from main thread 
and implement function which sends result of the computation to the main thread
*/

import { workerData, parentPort } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();