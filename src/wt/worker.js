import {
  Worker,
  isMainThread,
  setEnvironmentData,
  getEnvironmentData,
  parentPort,
} from "node:worker_threads";
import path from "path";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // parentPort is parent stream.
  // This function sends result of nthFibonacci computations to main thread
  parentPort.on("message", (data) => {
    // Data have come from main thread
    parentPort.postMessage({ status: "resolved", data: nthFibonacci(data) });
    //rejected example
    // if (+data == 12) { return parentPort.postMessage({ status: "error", data: nthFibonacci(data) }); }
  });
  parentPort.on("error", (data) => {
    parentPort.postMessage({ status: "error", data: null });
  });
  parentPort.on("exit", (data) => {
    if (code !== 0) {
      parentPort.postMessage({ status: "error", data: null });
    }
  });
};

sendResult();