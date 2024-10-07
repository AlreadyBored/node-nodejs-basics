import { Worker } from "worker_threads";
import path from "node:path";
import os from "node:os";

const performCalculations = async () => {
  const numOfCores = os.cpus().length;
  let numberOfDataReceived = 0;
  const results = new Array(numOfCores).fill({ status: null, data: null });
  const filePath = path.join(import.meta.dirname + "/worker.js");

  for (let i = 0; i < numOfCores; i++) {
    const worker = new Worker(filePath);
    const numberToSend = 10 + i;
    worker.postMessage(numberToSend);

    worker.on("message", (message) => {
      results[i] = message;
      if (++numberOfDataReceived === numOfCores) {
        console.log(results);
      }
    });

    worker.on("error", (message) => {
      results[i].status = "error";
      if (++numberOfDataReceived === numOfCores) {
        console.log(results);
      }
    });
  }
};

await performCalculations();
