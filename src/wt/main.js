import { Worker } from "node:worker_threads";
import os from "node:os";
import path from "node:path";

const performCalculations = async () => {
  const __dirname = import.meta.dirname;

  const numCPUs = os.cpus().length;
  const workers = [];
  const results = [];
  const scriptPath = path.resolve(__dirname, "worker.js");

  const createWorker = (workerData, index) => {
    return new Promise((resolve) => {
      const worker = new Worker(scriptPath);
      worker.postMessage(workerData);

      worker.on("message", (message) => {
        results[index] = message;
        resolve();
        worker.terminate();
      });

      worker.on("error", () => {
        results[index] = { status: "error", data: null };
        resolve();
        worker.terminate();
      });
    });
  };

  for (let i = 0; i < numCPUs; i++) {
    const workerData = 10 + i;
    workers.push(createWorker(workerData, i));
  }

  await Promise.all(workers);

  console.log("results -> ", results);
};

await performCalculations();
