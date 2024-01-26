import worker from "worker_threads";

const nthFibonacci = (n) =>
    n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    worker.parentPort.postMessage(nthFibonacci(worker.workerData));
};

sendResult();
