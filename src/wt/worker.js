import { parentPort } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (n) => {
    try {
        const result = nthFibonacci(n);  // Perform Fibonacci calculation
        parentPort.postMessage({ status: 'resolved', data: result });  // Send result to main thread
    } catch (error) {
        parentPort.postMessage({ status: 'error', data: null });  // Send error to main thread
    }
};

// Listen for messages from the main thread
parentPort.on('message', (n) => {
    sendResult(n);
});
