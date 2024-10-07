
import { Worker, isMainThread, parentPort } from 'worker_threads';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if (isMainThread) {
        const worker = new Worker(__filename);
        worker.on('message', (n) => { console.log(nthFibonacci(n)); });
    } else {
        // 4th fibonacci
        parentPort.postMessage(4);
    }
};

sendResult();