import {parentPort, workerData} from 'worker_threads';

const {count} = workerData;
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (result) => {
    parentPort.postMessage({status: 'resolved', data: result});
};

const result = nthFibonacci(count);
sendResult(result);