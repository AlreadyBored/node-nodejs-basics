import {Worker, parentPort, workerData} from "node:worker_threads";
// n should be received from main thread

const numbers = workerData;

function nthFibonacci(n) {
    if (n < 2)
        return n;
    else
        return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}

const result = nthFibonacci(numbers);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    
    parentPort.postMessage(result);
};

sendResult(); 
