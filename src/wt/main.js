import { Worker } from "node:worker_threads";
import { cpus } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const performCalculations = async () => {
  const numCores = cpus().length;

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const workerPath = join(__dirname, "worker.js");

  const workerPromises = [];

  for (let i = 0; i < numCores; i++) {
    const valueToSend = 10 + i;

    const workerPromise = new Promise((resolve) => {
      const worker = new Worker(workerPath);

      worker.on("message", (result) => {
        if (result && result.error) {
          resolve({
            status: "error",
            data: null,
          });
        } else {
          resolve({
            status: "resolved",
            data: result,
          });
        }

        worker.terminate();
      });

      worker.on("error", () => {
        resolve({
          status: "error",
          data: null,
        });

        worker.terminate();
      });

      worker.postMessage(valueToSend);
    });

    workerPromises.push(workerPromise);
  }

  const results = await Promise.all(workerPromises);

  console.log(results);
};

await performCalculations();
