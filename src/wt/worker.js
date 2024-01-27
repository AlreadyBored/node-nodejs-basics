import {workerData, parentPort} from 'worker_threads';


// n should be received from main thread
// Function to calculate the nth Fibonacci number
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);


const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread

    // Retrieve the value of 'n' from the main thread
    const n = workerData;

    // Calculate the nth Fibonacci number
    const result = nthFibonacci(n);

    // Log the result before sending it back to the main thread
    console.log(`Worker thread with input ${n} finished. Result: ${result}`);

    // Send the result back to the main thread
    parentPort.postMessage(result);
};

sendResult();