import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const cpuCount = os.cpus().length;
  const workers = [];
  const results = Array(cpuCount).fill(null);

  for (let i = 0; i < cpuCount; i++) {
    workers.push(
      new Promise((resolve) => {
        const worker = new Worker("./src/wt/worker.js");
        const numberToSend = 10 + i;

        worker.on("message", (message) => {
          results[i] = message;
          resolve();
        });

        worker.on("error", (error) => {
          console.error(`Worker error: ${error.message}`);
          results[i] = { status: "error", data: null };
          resolve();
        });

        worker.postMessage(numberToSend);
      })
    );
  }

  await Promise.all(workers);

  console.log(results);
};

await performCalculations();
