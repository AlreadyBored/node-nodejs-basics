// extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread
// n should be received from main thread
import { parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

parentPort.on("message", (n) => {
  const result = nthFibonacci(n);
  parentPort.postMessage(result);
});
