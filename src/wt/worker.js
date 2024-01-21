import { parentPort } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// This function receives, calculates, and sends result of nthFibonacci computations to main thread
const sendResult = () => {
    parentPort.on("message", (n) => {
        // Compute the nth Fibonacci number and send it back to the main thread
        parentPort.postMessage(nthFibonacci(n));

        // Exit the worker thread
        process.exit();
    });
};

sendResult();