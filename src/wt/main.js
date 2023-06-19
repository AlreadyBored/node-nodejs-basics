import { cpus } from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const calculateFibonaci = (workerData) =>
    new Promise(async (resolve) => {
      const worker = new Worker(new URL("./worker.js", import.meta.url), {
        workerData,
      });
      worker.on("message", (data) => resolve({ status: "resolved", data }));
      worker.on("error", (data) => resolve({ status: "resolved", data }));
    });

  const culculateArr = [];
  const startNumber = 10;
  for (let i = 0; i < cpus().length; i++) {
    culculateArr.push(calculateFibonaci(startNumber + i));
  }
  const result = await Promise.all(culculateArr);

  console.log(result);
};

await performCalculations();
