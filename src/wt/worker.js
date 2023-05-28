// n should be received from main thread
import { parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  parentPort.on("message", (message) => {
    const n = parseInt(message, 10);
    if (!isNaN(n)) {
      const result = nthFibonacci(n);
      parentPort.postMessage({ status: "resolved", data: result });
    } else {
      parentPort.postMessage({ status: "error", data: null });
    }
  });
  parentPort.on("error", (message) => {
    parentPort.postMessage({ status: "error", data: null });
  });
};

sendResult();
