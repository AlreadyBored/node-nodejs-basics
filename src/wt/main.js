import { Worker } from "worker_threads";
import os from "os";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const performCalculations = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const workerScript = path.join(basePath, "/worker.js");

  const totalCores = os.cpus().length;
  const workerPromises = [];

  for (let i = 0; i < totalCores; i++) {
    const fibonacciSequenceNumber = 10 + i;
    const workerThread = new Worker(workerScript);

    const workerPromise = new Promise((resolve) => {
      workerThread.on("message", (result) => {
        resolve(result);
      });

      workerThread.postMessage({ n: fibonacciSequenceNumber });
    });

    workerPromises.push(workerPromise);
  }

  await Promise.all(workerPromises);
  console.log(workerPromises);
};

await performCalculations();
