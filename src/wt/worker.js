import worker_threads from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    worker_threads.parentPort.on('message', (n) => {
        const res = nthFibonacci(n);
        worker_threads.parentPort.postMessage({
            status: 'resolved',
            data: res
        });
    });
    worker_threads.parentPort.on('messageerror', () => {
        worker_threads.parentPort.postMessage({
            status: 'error',
            data: null
        });
    });
};

sendResult();
