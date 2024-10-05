import { Worker } from "worker_threads";
import os from "os";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const countCpuCore = os.cpus().length;
  const results = new Array(countCpuCore).fill(null);

  const createWorker = (index, number) => {
    const pathToWorker = `${__dirname}/worker.js`;
    return new Promise((resolve, reject) => {
      const worker = new Worker(pathToWorker, { type: "module" });

      worker.postMessage(number);

      worker.on("message", (message) => {
        resolve({ index, result: message });
        worker.terminate();
      });

      worker.on("error", (error) => {
        resolve({ index, result: { status: "error", data: null } });
        worker.terminate();
      });
    });
  };

  const promises = [];

  for (let i = 0; i < countCpuCore; i++) {
    promises.push(createWorker(i, 10 + i));
  }

  const resultsArray = await Promise.all(promises);

  resultsArray.forEach(({ index, result }) => {
    results[index] = result;
  });

  console.log(results);
};

performCalculations();
