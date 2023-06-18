import { workerData, parentPort } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {

// Uncomment to test errors in worker:
/*
    if (Math.random() > 0.5) 
        throw new Error(workerData);
*/    
    parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();