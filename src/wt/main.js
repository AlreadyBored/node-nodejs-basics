import { Worker, isMainThread } from "node:worker_threads";
import { cpus } from "os";
import { sendResult } from "./worker.js";

const __filename = import.meta.filename;
const cpuQuantity = cpus().length;
const startingDigit = 10;

const performCalculations = async () => {
  const promises = [...new Array(cpuQuantity)].map((_, index) =>
    createWorker(startingDigit + index)
  );

  const result = await Promise.all(promises);

  return result.map((answer) => ({
    status: typeof answer === "number" ? "resolved" : "error",
    data: answer ?? null,
  }));
};

const createWorker = (workerData) => {
  return new Promise((resolve, reject) => {
    if (isMainThread) {
      const worker = new Worker(__filename, { workerData });

      worker.on("error", (err) => {
        throw err;
      });

      worker.on("exit", (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });

      worker.on("message", resolve);
    } else {
      sendResult();
    }
  });
};

await performCalculations();
