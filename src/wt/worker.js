import { parentPort } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread

    parentPort.on('message', (n) => {
        try {
            const result = nthFibonacci(n);
            parentPort.postMessage(result);
        } catch (error) {
            parentPort.postMessage({ error: error.message });
        }
    });
};

sendResult();