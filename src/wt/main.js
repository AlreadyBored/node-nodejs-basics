import { Worker } from "worker_threads";
import os from "os";

const url = import.meta.url;
const numOfCpus = os.cpus().length;
const path = new URL("./worker.js", url);

const performCalculations = async () => {
  const start = (workerData) =>
    new Promise((resolve) => {
      const worker = new Worker(path, { workerData });

      worker.on("message", (data) => resolve({ status: "resolved", data }));
      worker.on("error", () => resolve({ status: "error", data: null }));
    });

  const result = await Promise.all(
    [...new Array(numOfCpus)].map((_, i) => start(i + 10))
  );
  console.log(result);
};

await performCalculations();
