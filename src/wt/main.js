import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const workers = new Array(numCores);
  for (let i = 0; i < numCores; i++) {
    const numberToSend = 10 + i;
    workers[i] = runWorker(i, numberToSend);
  }

  function runWorker(index, data) {
    return new Promise((resolve) => {
      const worker = new Worker("./worker.js");
      worker.postMessage(data);

      worker.on("message", (result) => {
        resolve({ status: "resolved", data: result });
        worker.terminate();
      });

      worker.on("error", () => {
        resolve({ status: "error", data: null });
        worker.terminate();
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          resolve({ status: "error", data: null });
        }
      });
    });
  }

  const results = await Promise.all(workers);
  console.log(results);
};

await performCalculations();
