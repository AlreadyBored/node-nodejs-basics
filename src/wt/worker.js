// n should be received from main thread
import { workerData, parentPort } from "node:worker_threads";
export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  try{
    const number = workerData;
    let data =nthFibonacci(number);
    parentPort.postMessage({ status: 'resolved', data: data });
  }
  catch(e)
  {
    parentPort.postMessage({ status: 'error', data: null });
  }
};
sendResult()