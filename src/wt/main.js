import path from "node:path";
import url from "node:url";
import { Worker } from "node:worker_threads";
import { cpus } from "node:os";

const performCalculations = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, "worker.js");

  const coresNumber = cpus().length;

  const workers = [];
  let counter = 10;

  for (let i = 0; i < coresNumber; i++) {
    const worker = new Worker(filePath);
    worker.postMessage(counter++);
    workers.push(worker);
  }

  const results = await Promise.allSettled(
    workers.map(
      (worker) =>
        new Promise((resolve, reject) => {
          worker.on("message", (value) => {
            resolve({ status: "resolved", data: value });
          });
          worker.on("error", (value) => {
            resolve({ status: "error", data: null });
          });
        })
    )
  );

  results.forEach((result) => console.log(result.value));
};

await performCalculations();
