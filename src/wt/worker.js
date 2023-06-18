import { isMainThread, Worker, parentPort } from 'node:worker_threads'
import path from 'node:path';
import { fileURLToPath } from 'url';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const directory = path.dirname(fileURLToPath(import.meta.url))
    const file = path.join(directory, 'worker.js')
    if (isMainThread) {
        const worker = new Worker(file)
        worker.on('message', (message)=>{
            console.log(message)
        } )
    } else {
        parentPort.postMessage(nthFibonacci(4))
    }
}

sendResult();
