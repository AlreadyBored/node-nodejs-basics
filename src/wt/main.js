import { Worker } from "worker_threads";
import { cpus } from "os";

const performCalculations = async () => {
  const numCores = cpus().length;
  const workers = [];
  let results;

  const runWorker = (workerData) => {
    return new Promise((resolve) => {
      const worker = new Worker("./worker.js");

      worker.on("message", (data) => {
        resolve({ status: "resolved", data });
      });

      worker.on("error", (data) => {
        console.log(data);

        resolve({ status: "error", data: null });
      });

      worker.postMessage(workerData);
    });
  };

  for (let i = 0; i < numCores; i++) {
    workers.push(runWorker(10 + i));
  }

  results = await Promise.all(workers);
  console.log(results);
  process.exit(0);
};

performCalculations();
