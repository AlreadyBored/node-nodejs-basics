import { Worker } from "worker_threads";
import { cpus } from "os";

const WORKER_PATH = "./src/wt/worker.js";
const INCREMENTAL_START = 10;

const performCalculations = async () => {
  const calculationResults = [];

  const runService = (i) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(WORKER_PATH);
      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code != 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      });
      
      worker.postMessage(i);
    });
  };

  const run = async (i) => {
    const result = await runService(i);
    calculationResults.push({ status: "resolved", data: result });
  };

  for (let i = INCREMENTAL_START; i < cpus().length + INCREMENTAL_START; i++) {
    await run(i).catch(() => {
        calculationResults.push({ status: "error", data: null })
    }
    );
  }

  console.log(calculationResults);
};

await performCalculations();
