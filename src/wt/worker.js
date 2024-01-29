import { parentPort, workerData } from 'node:worker_threads';

const n = workerData;

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

try {
    if (n === 11) { // example for error in second thread - remove it for NO error output
        throw new Error('Erororrrr!!');
    }

    const result = nthFibonacci(n);

    parentPort.postMessage({ status: 'resolved', data: result });
} catch (error) {
    parentPort.postMessage({ status: 'error', data: null });
}
