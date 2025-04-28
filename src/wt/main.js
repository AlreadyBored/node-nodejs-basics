import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const cpuCores = os.cpus().length;
  const workerPromises = [];

  for (let i = 0; i < cpuCores; i++) {
    const workerData = 10 + i;
    const worker = new Worker(new URL("./worker.js", import.meta.url), { workerData });

    const workerPromise = new Promise((resolve) => {
      worker.on("message", (result) =>
        resolve({
          status: "resolved",
          data: result,
        })
      );

      worker.on("error", () =>
        resolve({
          status: "error",
          data: null,
        })
      );

      worker.on("exit", (code) => {
        if (code !== 0)
          resolve({
            status: "error",
            data: null,
          });
      });
    });

    workerPromises.push(workerPromise);
  }

  const results = await Promise.all(workerPromises);
  console.log(results);
};

await performCalculations();
