import { workerData, parentPort } from 'worker_threads'


const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const id = workerData

    const result = nthFibonacci(id + 10)

    parentPort.postMessage({ result: result, id: id})
};

sendResult();

// worker.js - extend given function to work with data received from main thread and implement function 
// which sends result of the computation to the main thread