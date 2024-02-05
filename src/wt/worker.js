// - extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread
import { parentPort, workerData } from 'node:worker_threads'

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    parentPort.postMessage(nthFibonacci(workerData))
    // What is parentPort?
    // It is a MessagePort allowing communication with the parent thread
    // What is workerData?
    // It is a clone of the data passed to this thread's Worker constructor.
    // Example:
        // const { Worker, isMainThread, workerData } = require('node:worker_threads');
        // if (isMainThread) {
        //   const worker = new Worker(__filename, { workerData: 'Hello, world!' });
        // } else {
        //   console.log(workerData);  // Prints 'Hello, world!'.
        // }
};

sendResult();