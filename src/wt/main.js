import path from "path";
import os from "os";
import { Worker } from "worker_threads";

import { getPath } from "../helpers/getPath.js";

const performCalculations = async () => {
  const INCREMENTAL_NUMBER = 10;

  const { __dirname } = getPath(import.meta.url);
  const fullPath = path.join(__dirname, "worker.js");

  const workers = os.cpus().map((_, index) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(fullPath, {
        workerData: index + INCREMENTAL_NUMBER,
      });

      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with ${code} exit code`));
        }
      });
    });
  });

  const data = await Promise.allSettled(workers);

  const formatData = data.map(({ status, value }) => ({
    status: status !== "rejected" ? "resolved" : "error",
    data: value ? value : null,
  }));

  console.log(formatData);
};

await performCalculations();
