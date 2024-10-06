// n should be received from main thread
import { parentPort, workerData } from 'worker_threads'

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    const res = nthFibonacci(workerData.fib)
    parentPort.postMessage(res)
};

sendResult();