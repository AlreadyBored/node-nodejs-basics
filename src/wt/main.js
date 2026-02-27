import os from "os";
import { Worker } from "worker_threads";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const cpuCount = os.cpus().length;
  const workerPath = path.resolve(__dirname, "worker.js");

  const results = new Array(cpuCount);

  const workers = [];

  for (let i = 0; i < cpuCount; i++) {
    const worker = new Worker(workerPath, {
      workerData: { n: 10 + i },
    });

    workers.push(
      new Promise((resolve, reject) => {
        worker.on("message", (result) => {
          results[i] = result;
          resolve();
        });

        worker.on("error", (error) => {
          results[i] = {
            status: "error",
            data: null,
          };
          reject(error);
        });
      }),
    );
  }

  await Promise.all(workers);
  console.log(results);
};

await performCalculations();
