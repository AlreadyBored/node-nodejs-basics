import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import { fileURLToPath } from 'url';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (result) => {
    // This function sends result of nthFibonacci computations to main thread
    parentPort.postMessage(result);
};

if (isMainThread) {
    const n = 10;
    const fileName = fileURLToPath(import.meta.url);
    const worker = new Worker(fileName, { workerData: n });

    worker.on('message', (result) => {
        console.log(`The ${n}th Fibonacci number is: ${result}`);
    });


    worker.on('error', (error) => {
        console.error(`Error: ${error.message}`);
    });

    worker.on('exit', (code) => {
        if (code !== 0) {
            console.error(`Worker stopped with exit code ${code}`);
        }
    });
} else {
    const n = workerData;
    const result = nthFibonacci(n);
    sendResult(result);
}

//sendResult();