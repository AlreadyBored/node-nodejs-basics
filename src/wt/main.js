import { Worker, isMainThread } from "worker_threads";
import os from "os";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
  // Write your code here

  const pathToWorker = path.join(__dirname, "worker.js");
  const cpuQuntity = os.cpus().length;

  if (isMainThread) {
    const result = [];
    for (let i = 0; i < cpuQuntity; i++) {
      const worker = new Worker(pathToWorker, {
        workerData: {
          name: `worker${i}`,
          data: i + 10,
        },
      });

      const resultPromise = new Promise((resolve, reject) => {
        worker.on("message", (message) => {
          resolve({
            status: "resolved",
            data: message.data,
          });
        });

        worker.on("error", (error) => {
          reject({
            status: "error",
            data: null,
          });
        });
      });

      try {
        const workersResult = await resultPromise;
        result.push(workersResult);
      } catch (error) {
        console.error(error);
      }
    }
      console.log(result);
    }
};

await performCalculations();
