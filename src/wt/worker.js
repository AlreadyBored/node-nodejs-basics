import { Worker, isMainThread, parentPort, workerData } from 'worker_threads'

const __filename = new URL(import.meta.url);

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    parentPort.postMessage(nthFibonacci(workerData.numberToCalculate))
};

if (isMainThread) {
    const numberToCalculate = 9;
    const worker = new Worker(
        __filename,
        {
            workerData: {
                numberToCalculate,
            }
        });

    worker.on('message', val => console.log(`Fibonacci for ${numberToCalculate} is ${val}`));
} else {
    sendResult();
}
