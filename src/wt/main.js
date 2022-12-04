import { Worker } from "node:worker_threads";
import { cpus } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

function createWorkerThread(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(join(__dirname, "worker.js"), { workerData });
    worker.on("message", resolve);
    worker.on("error", () => {
      resolve({ data: null, status: "error" });
    });
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}
const performCalculations = async () => {
  const numberOfWorkers = cpus().length;
  const numbers = [];
  for (let i = 0; i < numberOfWorkers; ++i) {
    numbers.push(10 + i);
  }
  const result = await Promise.all(numbers.map((n) => createWorkerThread(n)));
  console.log(result);
};

await performCalculations();
