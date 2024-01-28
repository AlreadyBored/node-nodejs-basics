import { Worker } from "worker_threads";
import { availableParallelism } from "os";

const numCPU = availableParallelism();

const performCalculations = async () => {
  const workers = Array.from({ length: numCPU }, (_, index) => {
    const worker = new Worker("./src/wt/worker.js", { workerData: index + 10 });
    return new Promise((res) => worker.on("message", (msg) => res(msg)));
  });
  const result = await Promise.all(workers);
  console.log(result);
};

await performCalculations();
