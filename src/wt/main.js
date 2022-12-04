import { Worker } from "node:worker_threads";
import os from "node:os";
import path from "node:path";

const performCalculations = async () => {
  // Write your code here

  const workerPath = path.resolve(process.cwd(), "src", "wt", "worker.js");

  let num = 10;
  const workers = [];
  const numberOfCpus = os.cpus().length;

  for (let i = 0; i < numberOfCpus; i++) {
    workers.push(
      new Promise((res, rej) => {
        const worker = new Worker(workerPath);

        worker.postMessage(num);

        worker.once("message", (message) => {
          res({ status: "resolved", data: message });
        });

        worker.once("error", () => {
          rej({ status: "error", data: null });
        });
      })
    );

    num++;
  }

  const results = await Promise.allSettled(workers);

  console.log(
    results.map((res) => (res.status === "rejected" ? res.reason : res.value))
  );
};

await performCalculations();
