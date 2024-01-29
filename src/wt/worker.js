import { parentPort } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    parentPort.on('message', (data) => {
        console.log(data);
        const result = nthFibonacci(data);
        parentPort.postMessage(result);
    })

    parentPort.postMessage(3);
};

sendResult();