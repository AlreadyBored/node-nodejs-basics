import { getEnvironmentData, parentPort } from 'worker_threads';
const fib = getEnvironmentData('num')

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    const result = nthFibonacci(fib)
    parentPort.postMessage({ result })
};

sendResult()