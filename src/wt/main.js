import { Worker } from "worker_threads";
import path, { resolve } from "path";
import os from "os";

const performCalculations = async () => {
  const cpus = os.cpus();
  const startNum = 10;

  const promises = cpus.map((_, index) => {
    return new Promise((resolve) => {
      const worker = new Worker(path.resolve("worker.js"), { type: "module" });

      worker.postMessage(startNum + index);

      worker.on("message", (result) => {
        resolve({
          status: "resolved",
          data: result,
        });
      });

      worker.on("error", () => {
        resolve({
          status: "error",
          data: null,
        });
      });
    });
  });

  const results = await Promise.all(promises);
  console.log(results);
};

await performCalculations();
