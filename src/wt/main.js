import os from "node:os";
import { Worker } from "node:worker_threads";
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);  
const initialData = 10;

const performCalculations = async () => {
  const cpuCores = os.cpus();

  const workers = cpuCores.map((core, i) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(path.resolve(__dirname, './worker.js'), { workerData: initialData + i });
      worker.on("message", (data) => resolve({ status: "resolved", data }));
      worker.on("error", () => reject({ status: "error", data: null }));
      worker.on("exit", (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  });

  const result = await Promise.all(workers);
  console.log(result);
  
};

await performCalculations();
