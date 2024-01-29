import { Worker } from "worker_threads";
import os from "os";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const numCPUs = os.cpus().length;
  const workers = [];
  const results = [];

  for (let i = 0; i < numCPUs; i++) {
    const worker = new Worker(
      new URL(join("file:", __dirname, "worker.js"), import.meta.url)
    );
    worker.postMessage(10 + i);
    workers.push(worker);
  }

  for (const worker of workers) {
    const result = await new Promise((resolve, reject) => {
      worker.on("message", resolve);
      worker.on("error", reject);
    });
    results.push(result);
  }

  console.log(results);
};

performCalculations().catch(console.error);
