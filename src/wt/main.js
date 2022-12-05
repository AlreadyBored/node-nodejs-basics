import { Worker } from "node:worker_threads";
import { cpus } from "node:os";
import { makePath } from "../utils/makePath.js";

const path = makePath(import.meta.url, "worker.js");

const performCalculations = async () => {
  const cp = cpus();
  const workersData = await Promise.allSettled(
    cp.map((item, index) => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(path, { workerData: 10 + index });
        worker.on("message", (message) => resolve(message));
        worker.on("error", (message) => reject(message));
      });
    })
  );

  const results = workersData.map(({ status, value }) => {
    return {
      status: status === "fulfilled" ? "resolved" : "error",
      data: status === "fulfilled" ? value : null,
    };
  });

  console.log(results);
};

await performCalculations();
