import { parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (result) => {
  // Send result of nthFibonacci computations to main thread
  parentPort.postMessage(result);
};

// Listen for messages from the main thread
parentPort.on("message", (n) => {
  const result = nthFibonacci(n);
  sendResult(result);
});
