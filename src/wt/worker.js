import { parentPort, workerData } from "worker_threads";

// n should be received from main thread
export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = async () => {
  try {
    if (workerData === 13) throw new Error("shit");
    const value = nthFibonacci(workerData);
    parentPort.postMessage({ status: "resolved", data: value });
  } catch (e) {
    parentPort.postMessage({ status: "error", data: null });
  }
};

sendResult();
