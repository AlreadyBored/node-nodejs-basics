import os from "node:os";
import { isMainThread, Worker } from "node:worker_threads";

const filePath = import.meta.dirname + "/worker.js";

const performCalculations = async () => {
  try {
    const result = [];
    const hostCores = os.cpus().length;
    if (isMainThread) {
      for (let i = 0; i < hostCores; i++) {
        const workers = new Promise((resolve, reject) => {
          const worker = new Worker(filePath, { workerData: 10 + i });
          worker.on("message", resolve);
          worker.on("error", reject);
        });
        result.push(workers);
      }
    }
    const data = await Promise.allSettled(result);
    const finalResult = data.map((el) => ({
      status: el.status === "fulfilled" ? "resolved" : "error",
      data: el.status === "fulfilled" ? el.value.data : null,
    }));
    console.log(finalResult);
  } catch (error) {
    throw new Error(error);
  }
};

await performCalculations();
