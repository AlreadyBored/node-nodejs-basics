import { workerData, parentPort, getEnvironmentData } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    const fibResult = nthFibonacci(workerData)
    if(fibResult === 144) {
        // throw new Error('Simulated error.');
    }
    parentPort.postMessage(fibResult);
}

sendResult();