import { Worker } from "node:worker_threads";
import path from "path";
import { fileURLToPath } from "url";
import os from "node:os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const START_FROM = 10;

  const cpus = os.cpus();

  const promises = cpus.map((_, index) => {
    const worker = new Worker(path.join(__dirname, "worker.js"));
    worker.postMessage(START_FROM + index);
    return new Promise((resolve, reject) => {
      worker.on("message", (msg) => {
        resolve({
          status: "resolved",
          data: msg,
        });
        worker.terminate();
      });

      worker.on("error", () => {
        resolve({
          status: "error",
          data: null,
        });

        worker.terminate();
      });
    });
  });
  const result = await Promise.all(promises);
  console.log(result);
};

await performCalculations();
