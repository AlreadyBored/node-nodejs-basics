import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const cpuCores = os.cpus().length;
  const startNumber = 10;
  const numbers = Array.from({ length: cpuCores }, (_, i) => startNumber + i);

  const workerPromises = numbers.map((number) => {
    return new Promise((resolve) => {
      const worker = new Worker(new URL("./worker.js", import.meta.url));
      worker.postMessage(number);

      worker.on("message", (result) => {
        resolve({ status: "resolved", data: result });
      });

      worker.on("error", () => {
        resolve({ status: "error", data: null });
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          resolve({ status: "error", data: null });
        }
      });
    });
  });

  const results = await Promise.all(workerPromises);
  console.log(results);
};

await performCalculations();
