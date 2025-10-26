import { cpus } from "node:os";
import { Worker } from "node:worker_threads";
import { URL, fileURLToPath } from "node:url";

const performCalculations = async () => {
  // Write your code here
  const numCPUs = cpus().length;
  const workerURL = new URL("./worker.js", import.meta.url);
  const workerPath = fileURLToPath(workerURL);

  const promises = Array.from({ length: numCPUs }, (_, i) => {
    const workerData = 10 + i;
    const worker = new Worker(workerPath, { workerData });

    return new Promise((resolve) => {
      worker.on("message", (data) => {
        resolve({ status: "resolved", data });
      });
      worker.on("error", () => {
        resolve({ status: "error", data: null });
      });
      worker.on("exit", (code) => {
        if (code !== 0) resolve({ status: "error", data: null });
      });
    });
  });

  const resultsArray = await Promise.all(promises);
  console.log(resultsArray);
};

await performCalculations();
