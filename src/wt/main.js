import { Worker } from "node:worker_threads";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const logicalCores = os.cpus().length;

  const workerPromises = Array.from({ length: logicalCores }, (_, i) => {
    return new Promise((resolve) => {
      const worker = new Worker(path.join(__dirname, "worker.js"));

      worker.on("message", (msg) => {
        resolve(msg);
      });

      worker.on("error", () => {
        resolve({ status: "error", data: null });
      });

      worker.postMessage(10 + i);
    });
  });

  const resolvedResults = await Promise.all(workerPromises);

  console.log(resolvedResults);
  process.exit(0); 
};

await performCalculations();
