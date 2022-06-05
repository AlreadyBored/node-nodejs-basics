import { fileURLToPath } from "url";
import path from "path";
import { Worker } from "worker_threads";
import { cpus } from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerPath = path.join(__dirname, "worker.js");

function runWorker(value) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, { workerData: value });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", () => {
      reject(new Error("Worker stop"));
    });
  });
}

const result = [];

export const performCalculations = async () => {
  // Write your code here

  const coreNumber = cpus().length;

  for (let addValue = 0; addValue < coreNumber; addValue++) {
    result.push(runWorker(10 + addValue));
  }

  console.log((await Promise.all(result)).toString().split(","));
};

performCalculations();
