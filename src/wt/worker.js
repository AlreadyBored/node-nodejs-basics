import { parentPort } from "worker_threads";

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = async() => {
    parentPort.on('message', data => {
        const processedData = nthFibonacci(data);

        parentPort.postMessage(processedData);
    })
};

await sendResult();