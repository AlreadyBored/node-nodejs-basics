import { workerData, parentPort } from "worker_threads";

const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
  // if (workerData === 12) {
  //   throw new Error("errr");
  // }
  parentPort.postMessage({ status: "resolved", data: nthFibonacci(workerData) });
};

try {
  sendResult();
} catch (err) {
  parentPort.postMessage({ status: "error", data: null });
}
