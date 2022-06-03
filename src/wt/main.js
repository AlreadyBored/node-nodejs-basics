import os from "os";
import path from "path";
import { Worker } from "worker_threads";

let userCPUCount = os.cpus().length;
const workerPath = path.resolve("./worker.js");

export const performCalculations = async () => {
  let masOfnumber = Array.from({ length: userCPUCount }, (v, k) => k + 10);
  const result = await Promise.all(
    masOfnumber.map(
      (i) =>
        new Promise((res, rej) => {
          const worker = new Worker(workerPath, { workerData: i });

          worker.on("message", res);

          worker.on("error", rej);

          worker.on("exit", (exitCode) => {
            if (exitCode !== 0) console.log(exitCode);
          });
        })
    )
  );
  console.log(result);
};
performCalculations();
