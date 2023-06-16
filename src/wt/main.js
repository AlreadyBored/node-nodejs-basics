import { cpus } from "os";
import { Worker } from "worker_threads";
import { getDirName } from "../utils/utils.js";

const performCalculations = async () => {
  const workerPath = getDirName(import.meta.url) + "/worker.js";

  const calcFib = (workerData) =>
    new Promise((res, rej) => {
      const worker = new Worker(workerPath, { workerData });

      worker.on("message", (data) => res({ status: "resolved", data }));
      worker.on("error", () => rej({ status: "rejected", data: null }));
    });

  const calculation = new Array(cpus().length)
    .fill(null)
    .map((value, index) => calcFib(index + 10));
  const data = await Promise.allSettled(calculation);

  console.log(data);
};

await performCalculations();
