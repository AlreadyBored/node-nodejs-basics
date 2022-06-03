import { parentPort, workerData } from "worker_threads";
import { Buffer } from "buffer";

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  //throw new Error("Something gets wrong...");
  parentPort.postMessage(nthFibonacci(workerData.num));
};

sendResult();



