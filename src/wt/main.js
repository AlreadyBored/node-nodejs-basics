import { Worker } from "worker_threads";
import os from "os";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
console.log(fileURLToPath(import.meta.url));
const createWorker = (n) => {
  const currDir = dirname(fileURLToPath(import.meta.url));
  return new Promise((resolve, reject) => {
    const worker = new Worker(join(currDir, "worker.js"), { workerData: n });
    worker.on("message", (result) => {
      resolve(result);
    });
    worker.on("error", (error) => {
      const result = {
        status: "error",
        data: null,
      };
      reject(result);
    });
    worker.on("exit", (code) => {
      if (code !== 0) {
        const result = {
          status: "error",
          data: null,
        };
        reject(result);
      }
    });
    worker.postMessage(n);
  });
};

const performCalculations = async () => {
  // Write your code here
  const cores = os.cpus().length;
  const workers = [];

  for (let i = 0; i < cores; i++) {
    const n = 10 + i;
    workers.push(createWorker(n));
  }

  try {
    const results = await Promise.all(workers);
    console.log("Results:", results);
  } catch (error) {
    console.error("Error:", error);
  }
};

await performCalculations();
