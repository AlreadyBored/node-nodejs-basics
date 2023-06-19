import os from "os";
import { Worker } from "worker_threads";
import getPath from "../helper/getPath.js";

const workerPath = getPath(import.meta, "worker.js");

const cores = os.cpus().length;

const performCalculations = async () => {
  const results = await Promise.allSettled(
    new Array(cores).map(
      (_, i) =>
        new Promise((resolve) => {
          const worker = new Worker(workerPath);

          worker.postMessage({ action: "request", data: 10 + i });

          worker.on("message", (message) => {
            resolve(message);
            worker.terminate();
          });
        })
    )
  );

  console.log(results);
};

await performCalculations();
