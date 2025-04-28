import { Worker } from "node:worker_threads";
import os from "node:os";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workerPath = path.join(__dirname, "worker.js");

const performCalculations = async () => {
  const cpuCount = os.cpus().length;
  const initialNumber = 10;

  const workerNumbers = Array.from(
    { length: cpuCount },
    (_, i) => initialNumber + i
  );

  const workerPromises = workerNumbers.map(
    (number, index) =>
      new Promise((resolve, reject) => {
        const worker = new Worker(workerPath);

        worker.postMessage(number);

        worker.on("message", (message) => {
          if (message.status === "success") {
            resolve(message.result);
          } else {
            reject(new Error(message.error));
          }
        });

        worker.on("error", reject);
        worker.on("exit", (code) => {
          if (code !== 0) {
            reject(new Error(`Worker stopped with exit code ${code}`));
          }
        });
      })
  );

  const settledResults = await Promise.allSettled(workerPromises);

  const formattedResults = settledResults.map((result) => ({
    status: result.status === "fulfilled" ? "resolved" : "error",
    data: result.status === "fulfilled" ? result.value : null,
  }));

  console.log(formattedResults);
};

await performCalculations();
