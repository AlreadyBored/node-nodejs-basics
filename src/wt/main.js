import { joinToURL } from "../helpers.js";
import wt from "node:worker_threads";
import os from "node:os";

const performCalculations = async () => {
  // Write your code here
  const workerPath = joinToURL(import.meta.url, "worker.js");

  const cpuQuantity = os.cpus().length;

  const workerTasks = Array.from({
    length: cpuQuantity,
  }).map(
    (_, i) =>
      new Promise((resolve, reject) => {
        const worker = new wt.Worker(workerPath, {
          workerData: i + 10,
        });

        worker.on("message", (workerResult) => {
          resolve({
            status: "resolved",
            data: workerResult,
          });
        });

        worker.on("error", () => {
          resolve({
            status: "error",
            data: null,
          });
        });
      })
  );

  return await Promise.all(workerTasks);
};

await performCalculations();
