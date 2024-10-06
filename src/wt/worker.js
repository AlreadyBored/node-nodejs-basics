import { parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
const sendResult = (result) => {
  parentPort.postMessage({ status: "success", data: result });
};

parentPort.on("message", (message) => {
  try {
    const n = message?.number;

    if (typeof n === "number" && n >= 0) {
      const result = nthFibonacci(n);
      sendResult(result);
    } else {
      parentPort.postMessage({ status: "error", message: "Invalid input" });
    }
  } catch (error) {
    parentPort.postMessage({ status: "error", message: error.message });
  }
});
