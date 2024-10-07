import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { cpus } from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const workerPath = path.join(__dirname, "worker.js");
  const createWorker = (workerPath, workerData) =>
    new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData });
      worker.on("message", (data) => resolve({ status: "resolved", data }));
      worker.on("error", () => reject({ status: "error", data: null }));
    });

  const res = await Promise.allSettled(
    cpus().map((item, i) => createWorker(workerPath, 10 + i))
  ).then((result) => result.map((res) => res.value));
  console.log(res);
};

await performCalculations();
