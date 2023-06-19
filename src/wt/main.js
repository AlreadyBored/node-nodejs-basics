import { cpus } from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const START_NUMBER = 10;
  const STATUS_RESOLVED = "resolved";
  const STATUS_ERROR = "error";
  const WORKER_PATH = "./worker.js";
  const workerUrl = new URL(WORKER_PATH, import.meta.url);

  const calculateNthFibonacci = (workerData) =>
    new Promise((resolve) => {
      const worker = new Worker(workerUrl, { workerData });

      worker.on("message", (data) =>
        resolve({ status: STATUS_RESOLVED, data })
      );
      worker.on("error", () => resolve({ status: STATUS_ERROR, data: null }));
    });

  const calculation = new Array(cpus().length)
    .fill(null)
    .map((value, index) => calculateNthFibonacci(index + START_NUMBER));
  const data = await Promise.all(calculation);

  console.log(data);
};

await performCalculations();
