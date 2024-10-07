import os from "os";
import { Worker } from "worker_threads";
import { join } from "path";
import {getExecutedFileDirname} from "../../helpers.js";

const workerFilePath = join(getExecutedFileDirname(import.meta.url), "worker.js");

const performCalculations = async () => {
  const cpus = os.cpus();
  let nthFibonacciNumber = 10;

  const workersResults = await Promise.all(
    cpus.map(() => {
      return new Promise(resolve => {
        const worker = new Worker(workerFilePath, {
          workerData: nthFibonacciNumber++,
        });
        worker.on("message", data => resolve({ status: "resolved", data }));
        worker.on("error", () =>  resolve({ status: "error", data: null }));
      });
    })
  );

  console.log(workersResults);
};

await performCalculations();
