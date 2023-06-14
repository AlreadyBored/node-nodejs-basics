import { parentPort } from "worker_threads";

const nthFibonacci = (n) => {
  console.log(`worker.js --- invoked: nthFibonacci(${n})`);
  return n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

const sendResult = (n) => {
  const result = nthFibonacci(n);
  parentPort.postMessage(result);
};

sendResult();

parentPort.on("message", (message) => {
  console.log(`parentPort.on("message", (${message})`);
  sendResult(message);
});
