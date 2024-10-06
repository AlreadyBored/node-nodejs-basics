import { parentPort } from "worker_threads";
// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// This function sends result of nthFibonacci computations to main thread
const sendResult = (n) => {
  const result = nthFibonacci(n);
  parentPort.postMessage(result);
};

parentPort.on("message", (n) => {
  sendResult(n);
});
