import { parentPort } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.on("message", (message) => {
    if (message.action !== "request") return;

    const { data } = message;
    const result = nthFibonacci(data);

    parentPort.postMessage({ action: "response", data: result });
  });
};

sendResult();
