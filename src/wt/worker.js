import { Worker, isMainThread, parentPort, workerData } from "node:worker_threads";
// n should be received from main thread
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    if (isMainThread) {
        const worker = new Worker(new URL(import.meta.url), {
            workerData: 10,
        });

        worker.on("message", (m) => console.log(m));
    } else {
        parentPort?.postMessage(nthFibonacci(workerData));
    }
};

sendResult();
