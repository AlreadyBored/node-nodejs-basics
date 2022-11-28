// n should be received from main thread
import {fileURLToPath} from "node:url";
import {isMainThread, parentPort, Worker, workerData} from "worker_threads";

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    console.log(workerData)
    const {src} = workerData;
    console.log(src)
    if (isMainThread) {
        const worker = new Worker(fileURLToPath(import.meta.url), {})
        worker.on("message", msg => console.log(`Worker message received: ${msg}`));
        worker.on("error", err => console.error(err));
        worker.on("exit", code => console.log(`Worker exited with code ${code}.`));
    } else {
        const data = workerData;
        parentPort.postMessage(`You said \"${data}\".`);

    }
};

sendResult();