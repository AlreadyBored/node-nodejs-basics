import { Worker } from "worker_threads";
import { cpus } from "os";

export const performCalculations = async () => {
  // Write your code here
  const calculate = (workerData) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker("./worker.js", { workerData });
      worker.on("message", (msg) => {
        resolve(msg);
      });
      worker.on("error", () => {
        reject({ data: null, status: "error" });
      });
      worker.on("exit", () => {
        console.log("exit");
      });
    });
  };
  try {
    const result = await Promise.all(
      Array(cpus().length)
        .fill(10)
        .map((a, i) => calculate(a + i))
    );
    return result;
  } catch (e) {
    console.error("worker error", e);
  }
};
