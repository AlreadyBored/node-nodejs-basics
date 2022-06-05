import { workerData, parentPort } from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    // to test error catching uncommit the line below 
    //if(workerData === 12) throw new Error('Test worker')
    parentPort.postMessage(nthFibonacci(workerData));
};

sendResult()