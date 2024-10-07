import { parentPort } from 'worker_threads';
 
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);



const sendResult = (result) => {
    parentPort.postMessage(result);
};

parentPort.on('message', (number) => {
    const result = nthFibonacci(number);
    sendResult([number, result]);
})