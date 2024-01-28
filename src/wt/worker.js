// n should be received from main thread
import { parentPort, workerData } from "worker_threads";
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// *** workerData - то, что передал главный процесс ***

const sendResult = () => {
    parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();
