import { Worker } from "worker_threads";
import path from "path";
import { fileURLToPath } from "url";
import os from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const numCores = os.cpus().length;
  console.log(`Detected ${numCores} logical CPU cores`);

  const workerPromises = [];
  const workers = [];

  for (let i = 0; i < numCores; i++) {
    const n = 10 + i;

    const workerPromise = new Promise((resolve) => {
      const worker = new Worker(path.join(__dirname, "worker.js"));
      workers.push(worker);

      worker.on("message", (message) => {
        console.log(`Worker ${i + 1} calculated Fibonacci(${n}) = ${message.result}`);
        resolve({
          status: "resolved",
          data: message.result,
        });
      });

      worker.on("error", (err) => {
        console.error(`Worker ${i + 1} error:`, err);
        resolve({
          status: "error",
          data: null,
        });
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          console.error(`Worker ${i + 1} stopped with exit code ${code}`);
          resolve({
            status: "error",
            data: null,
          });
        }
      });

      console.log(`Sending ${n} to worker ${i + 1}`);
      worker.postMessage({ n });
    });

    workerPromises.push(workerPromise);
  }

  process.on("SIGINT", () => {
    console.log("\nCaught Ctrl+C. Cleaning up...");
    workers.forEach((worker) => worker.terminate());
    process.exit(0);
  });

  const results = await Promise.all(workerPromises);

  console.log("All workers completed. Results:");
  console.log(results);

  return results;
};

await performCalculations();
