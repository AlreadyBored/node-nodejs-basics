import { parentPort  } from 'worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    parentPort.on('message', data => {
        const fibonacci = nthFibonacci(data.num);
        parentPort.postMessage({ fibonacci });
    });
};