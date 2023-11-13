import { Worker, isMainThread } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  if (isMainThread) {
    const numCores = os.cpus().length;
    const workerPromises = [];

    const createWorker = (index) => {
      return new Promise((resolve) => {
        const worker = new Worker("./src/wt/worker.js", {
          workerData: 10 + index,
        });

        worker.on("message", (result) => {
          resolve(result);
        });
      });
    };

    for (let i = 0; i < numCores; i++) {
      workerPromises.push(createWorker(i));
    }

    const results = await Promise.all(workerPromises);

    results.forEach(({ status, data }, index) => {
      console.log(`Worker ${index}: ${status} - ${data}`);
    });

    console.log("\nOverall Results:");
    console.log(results.map(({ status, data }) => ({ status, data })));
  }
};

await performCalculations();
