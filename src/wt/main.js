import { Worker } from "worker_threads";
import { cpus } from "os";

const performCalculations = async () => {
  const start = 10;
  const resolved = "resolved";
  const error_message = "error";
  const path = "./worker.js";
  const url = new URL(path, import.meta.url);

  const FibonacciCalc = (workerData) =>
    new Promise((resolve) => {
      const worker = new Worker(url, { workerData });

      worker.on("message", (data) => resolve({ status: resolved, data }));
      worker.on("error", () => resolve({ status: error_message, data: null }));
    });
  const calc = new Array(cpus().length)
    .fill(null)
    .map((value, index) => FibonacciCalc(index + start));
  const data = await Promise.all(calc);
  console.log(data);
};

await performCalculations();