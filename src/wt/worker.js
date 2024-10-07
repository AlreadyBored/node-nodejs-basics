import {  workerData, parentPort } from 'workerthreads';


const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const result = nthFibonacci(workerData);
    parentPort.postMessage(result);
};

sendResult();
