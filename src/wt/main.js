import os from "node:os";
import { Worker } from "node:worker_threads";

import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const WORKER_FILENAME = path.resolve(__dirname, "worker.js");

const performCalculations = async () => {
  const cpusCount = os.cpus().length;

  const promises = [...Array(cpusCount)].map((_, index) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(WORKER_FILENAME, {
        workerData: index + 10,
      });

      worker.on("message", (message) => {
        resolve(message);
      });

      worker.on("error", () => {
        reject(null);
      });
    });
  });

  const results = await Promise.allSettled(promises);
  const normalizedResult = results.map((result) => {
    const isFullfilled = result.status === "fulfilled";

    return {
      status: isFullfilled ? "resolved" : "error",
      data: isFullfilled ? result.value : result.reason,
    };
  });

  console.log(normalizedResult);
};

await performCalculations();
