import { workerData, parentPort } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread

    const result = `res: ${nthFibonacci(workerData.num)}, index: ${ workerData.num - 10}`;

    if (workerData.isError === '--withErrors') {
        if(Math.random() > 0.5 ) {
            parentPort.postMessage(result)
        }
        else {
            throw new Error('Error');
        }
    } else {
        parentPort.postMessage(result)
    }
};

sendResult();