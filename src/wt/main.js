import { Worker } from "node:worker_threads";
import os from "node:os";

const performCalculations = async () => {
  const cpus = os.cpus().length;
  const promises = [];

  for (let i = 0; i < cpus; i++) {
    promises.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(new URL("./worker.js", import.meta.url));
        worker.postMessage(10 + i);

        worker.on("message", (message) => {
          resolve(message.data);
        });

        worker.on("error", reject);
        worker.on("exit", (code) => {
          if (code !== 0) {
            reject(new Error(`Worker stopped with exit code ${code}`));
          }
        });
      })
    );
  }

  try {
    const results = await Promise.all(promises);
    console.log(results);
    process.exit(0);
    return;
  } catch (error) {
    console.error("Error in worker threads:", error);
    process.exit(1);
  }
};

await performCalculations();
