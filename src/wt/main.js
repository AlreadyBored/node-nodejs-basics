import { Worker } from "worker_threads";
import os from "os";

import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToWorker = path.join(__dirname, "worker.js");

const cpuNumb = os.cpus().length;

const performCalculations = async () => {
  function createWorker(number) {
    return new Promise(function (resolve, reject) {
      const worker = new Worker(pathToWorker, {
        workerData: number,
      });
      worker.on("message", (data) => {
        resolve(data);
      });
      worker.on("error", (msg) => {
        reject(`An error ocurred: ${msg}`);
      });
    });
  }

  const workerPromises = [];
  for (let i = 0; i < cpuNumb; i++) {
    workerPromises.push(createWorker(i + 10));
  }
  const thread_results = await Promise.all(workerPromises);

  console.log(thread_results);
};

await performCalculations();
