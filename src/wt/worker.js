import { parentPort, workerData } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  try {
    const data = nthFibonacci(workerData);
    parentPort.postMessage({ data, status: "resolved" });
  } catch (error) {
    parentPort.postMessage({ data: null, status: "error" });
  }
};

sendResult();
