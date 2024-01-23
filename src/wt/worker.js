import { parentPort, workerData } from "worker_threads";

const nthFibonacci = (n) => {
  return n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

const sendResult = (result) => {
  parentPort.postMessage(result);
};

const n = workerData;
const result = {
  status: "resolved",
  data: nthFibonacci(n),
};
sendResult(result);
