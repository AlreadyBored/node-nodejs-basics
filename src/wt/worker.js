import {isMainThread, parentPort, Worker, workerData} from 'node:worker_threads';

import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread;
    if (isMainThread) {
        let number = Math.ceil(Math.random()*10);
        const worker = new Worker(__dirname+'/worker.js', {workerData:number});
        worker.on('message', msg => {
            console.log(`Fibonacci from ${number} equal ${msg}`)
        })
    } else {
        const result = nthFibonacci(workerData);
        parentPort.postMessage(result);
    }
};

sendResult()