import { workerData, parentPort } from "node:worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const n = workerData;
  parentPort.postMessage(nthFibonacci(n));
};

sendResult();

//worker.js - extend given function to work with data received from main thread
//and implement function which sends result of the computation to the main thread
