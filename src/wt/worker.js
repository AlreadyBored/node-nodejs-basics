import { Worker, isMainThread, parentPort, workerData } from "worker_threads";
import path from "path";

const currentFolder = process.cwd();
const targetFile = "worker.js";

const pathToTargetFIle = path.join(currentFolder, targetFile);

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread

  if (isMainThread) {
    const worker = new Worker(pathToTargetFIle, { workerData: 7 });

    worker.on("message", (msg) => {
      console.log(`Worker: ${msg}`);
    });

    worker.on("error", () => {
      console.log(`Worker: Error`);
    });

    worker.on("exit", () => {
      console.log(`Worker: ends`);
    });
  } else {
    const res = nthFibonacci(workerData);
    parentPort.postMessage(res);
  }
};

sendResult();
