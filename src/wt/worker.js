// - extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread
import { parentPort, workerData } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();