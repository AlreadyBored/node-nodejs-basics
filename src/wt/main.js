import path from "node:path";
import os from "node:os";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
  const workerPath = path.join(process.cwd(), "src", "wt", "worker.js");

  const result = [];
  for (let i = 10; i < os.cpus().length + 10; i++) {
    const worker = createWorker(workerPath, { value: i });
    result.push(await worker);
  }

  console.log(await Promise.all(result));
};

function createWorker(path, payload) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path, { workerData: payload });
    worker.on("message", (message) =>
      resolve({ status: "resolved", data: message })
    );
    worker.on("error", () => resolve({ status: "error", data: null }));
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

await performCalculations();
