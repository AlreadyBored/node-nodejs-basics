// n should be received from main thread
import { parentPort } from 'worker_threads'

const RESOLVED = 'resolved';
const ERROR = 'error';

const statuses = {
    RESOLVED,
    ERROR
}

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {    
    parentPort.on('message', (n) => {
        try {
            const data = nthFibonacci(n);

            parentPort.postMessage({ status: statuses['RESOLVED'], data });
        } catch (error) {
            parentPort.postMessage({ status: statuses['ERROR'], data: null });
        }
    });
};

sendResult();