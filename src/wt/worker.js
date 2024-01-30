import { workerData, parentPort } from 'worker_threads';

try {
    // Simulate some computation in the worker thread
    const result = workerData * 2;

    // Send the result back to the main thread
    parentPort.postMessage(result);
} catch (error) {
    // Log the error details
    console.error(`Error in worker thread: ${error.message}`);
    console.error(error.stack);

    // Send a special value to indicate an error
    parentPort.postMessage({ error: true, message: error.message, stack: error.stack });

    // Terminate the worker with an exit code indicating an error
    process.exitCode = 1;
}



const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // Receive data from the main thread
    self.onmessage = (event) => {
        const n = event.data;

        // Perform the computation
        const result = nthFibonacci(n);

        // Send the result back to the main thread
        self.postMessage(result);
    };
};

sendResult();
