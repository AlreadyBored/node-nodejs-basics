import { Worker } from "worker_threads";
import path from "path";
import os from "os";

const workerPath = path.resolve("./src/wt/worker");
const CPUnum = os.cpus().length;

const performCalculations = async () => {
  const resultArr = [];
  const calculateFibonacci = (workerData) => {
    return new Promise((resolve) => {
      const worker = new Worker(workerPath, { workerData });
      worker.on("message", (result) => {
        resolve({ status: "resolved", data: result });
      });
      worker.on("error", () => {
        resolve({ status: "error", data: null });
      });
      worker.on("exit", (code) => {
        if (code !== 0) {
          resolve({ status: "error", data: null });
        }
      });
    });
  };

  for (let i = 0; i < CPUnum; i++) {
    const fibNum = i + 10;
    resultArr.push(calculateFibonacci(fibNum));
  }

  const result = await Promise.all(resultArr);
  console.log(result);
};
await performCalculations();