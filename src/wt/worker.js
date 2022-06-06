import * as workerJS from 'worker_threads';
// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    const result = nthFibonacci(workerJS.workerData)
    workerJS.parentPort.postMessage({
        status: result ? 'resolved' : 'error',
        data: result ? result : null
    })

    // // This function sends result of nthFibonacci computations to main thread
};
sendResult()