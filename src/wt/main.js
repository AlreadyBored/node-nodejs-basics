import os from "os";

import { Worker, isMainThread, parentPort, workerData } from "worker_threads";
import path from "path";

const currentFolder = process.cwd();
const targetFileWorker = "worker.js";

const pathToTargetFIleWorker = path.join(currentFolder, targetFileWorker);
const numberOfCores = os.cpus().length;

const performCalculations = async () => {
  const arrRes = [];
  let numberOfCompletedWorkers = 0;

  for (let i = 0; i < numberOfCores; i++) {
    const worker = new Worker(pathToTargetFIleWorker, {
      workerData: 10 + i,
    });

    const workerInfo = {
      status: null,
      data: null,
    };

    worker.on("message", (msg) => {
      workerInfo.status = "resolved";
      workerInfo.data = msg;
    });

    worker.on("error", () => {
      workerInfo.status = "error";
      workerInfo.data = null;
    });

    worker.on("exit", () => {
      numberOfCompletedWorkers++;
      arrRes.push(workerInfo);

      if (numberOfCompletedWorkers === numberOfCores) {
        console.log(arrRes);
      }
    });
  }
};

await performCalculations();
