import { workerData, parentPort } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// Next row for test Error
// if (Math.random() > 0.5) throw new Error('Generated Error');

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    parentPort.postMessage(nthFibonacci(workerData));
};


sendResult();