import { Worker, isMainThread, workerData, parentPort, threadId } from 'worker_threads'
import { fileURLToPath } from 'url';
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


if(isMainThread) {
    const worker = new Worker(__filename, {workerData: 11})
    worker.on('message', (data) => {
        console.log(data)
        console.log(threadId)
    })
}
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    if(isMainThread) return
    parentPort.postMessage(nthFibonacci(workerData))
};

sendResult();

// worker.js - extend given function to work with data received from main thread
// and implement function which sends result of the computation to the main thread
