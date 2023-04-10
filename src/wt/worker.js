import { parentPort } from "worker_threads";

let numberReceived;
parentPort.on("message", (message) => {
  numberReceived = message;
  sendResult();
});

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const numberToSend = nthFibonacci(numberReceived);
  parentPort.postMessage(numberToSend);
};
