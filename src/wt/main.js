import { Worker } from "worker_threads";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const adjustWorkerThread = (n) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcePath = path.join(__dirname, "worker.js");
  return new Promise((resolve) => {
    const worker = new Worker(sourcePath, { workerData: n });

    worker.on("message", (result) => {
      resolve({ status: "resolved", data: result });
    });

    worker.on("error", () => {
      resolve({ status: "error", data: null });
    });
  });
};

const performCalculations = async () => {
  const cpuCores = os.availableParallelism();
  const promises = [];

  for (let i = 0; i < cpuCores; i++) {
    const n = 10 + i;
    const promise = adjustWorkerThread(n);
    promises.push(promise);
  }

  try {
    const results = await Promise.all(promises);
    console.log(results);
  } catch (err) {
    console.error(err);
  }
};

await performCalculations();
