import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const workers = [];

  for (let i = 0; i < numCores; i++) {
    const worker = new Worker("./worker.js", { workerData: { n: i + 10 } });
    workers.push(worker);
  }

  for (const worker of workers) {
    worker.on("message", (result) => {
      console.log(result);
    });
    worker.on("error", (error) => {
      console.error(error);
    });
  }
};

await performCalculations();
