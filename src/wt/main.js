import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const workerPath = new URL("./worker.js", import.meta.url);
  const numCPUs = os.cpus().length;

  const results = [];

  function spawnWorker(workerInfo) {
    const worker = new Worker(workerPath);

    worker.on("message", ({ index, value }) => {
      results[index] = {
        status: "resolved",
        data: value,
      };

      checkResults();
      worker.terminate();
    });

    worker.on("error", () => {
      results[workerInfo.index] = {
        status: "error",
        data: null,
      };
      worker.terminate();
    });

    worker.postMessage(workerInfo);
  }

  function checkResults() {
    if (results.filter((result) => result.status).length === numCPUs) {
      console.log(results);
    }
  }

  for (let i = 0; i < numCPUs; i++) {
    spawnWorker({ value: i + 10, index: i });
  }
};

await performCalculations();
