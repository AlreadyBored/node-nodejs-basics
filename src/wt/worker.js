import { Worker, isMainThread, parentPort } from 'worker_threads';
import {fileURLToPath} from "url";

// n is received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  if (isMainThread) {
    const __filename = fileURLToPath(import.meta.url);
    const worker = new Worker(__filename);

    worker.once('message', (message) => {
      console.log('Result is: ', message);
    });
    worker.postMessage(15);
  } else {
    parentPort.once('message', (message) => {
      parentPort.postMessage(nthFibonacci(message));
    });
  }
};

sendResult();