import { workerData, parentPort } from 'worker_threads'


const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const id = workerData

    if (isNaN(id)) throw new Error()

    const result = nthFibonacci(id + 10)

    parentPort.postMessage({ result: result, id: id})
};

sendResult();
