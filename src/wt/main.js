import { Worker } from "node:worker_threads";
import { cpus } from "node:os";
import { join } from "node:path";

const performCalculations = async () => {
  const numCPUs = cpus().length;
  const workers = [];
  const results = [];

  // Create workers equal to number of CPU cores
  for (let i = 0; i < numCPUs; i++) {
    const worker = new Worker(join(process.cwd(), "src", "wt", "worker.js"));
    workers.push(worker);

    // Send incremental number starting from 10
    const number = 10 + i;
    worker.postMessage(number);

    // Handle worker response
    worker.on("message", (result) => {
      results[i] = { status: "resolved", data: result };
      worker.terminate();
    });

    // Handle worker error
    worker.on("error", (error) => {
      results[i] = { status: "error", data: null };
      worker.terminate();
    });
  }

  // Wait for all workers to complete
  await Promise.all(
    workers.map(
      (worker) =>
        new Promise((resolve) => {
          worker.on("exit", resolve);
        })
    )
  );

  console.log(results);
};

await performCalculations();
