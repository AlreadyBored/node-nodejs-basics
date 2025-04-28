import path from "node:path";
import os from "node:os";
import { Worker } from "node:worker_threads";

const workerPath = path.join(import.meta.dirname, "worker.js");

const performCalculations = async () => {
  const numCPUs = os.cpus().length;
  const initCount = 10;
  const workers = [];

  for (let i = 0; i < numCPUs; i++) {
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData: initCount + i });

      worker.on("message", (data) => {
        resolve({
          status: "resolved",
          data,
        });
      });

      worker.on("eroor", () => {
        reject({
          status: "error",
          data: null,
        });
      });
    });

    workers.push(promise);
  }

  const results = await Promise.all(workers);
  console.log(results);
};

await performCalculations();

