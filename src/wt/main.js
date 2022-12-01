import { cpus } from "node:os";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
  // Write your code here
  const results = [];
  for (let i = 0; i < cpus().length; i++) {
    const result = await new Promise((res, rej) => {
      const worker = new Worker("./worker.js", { workerData: 23 });
      worker.addListener("message", (response) => {
        res(response);
      });
      worker.addListener("error", (err) => {
        rej("error");
      });
    });
    const dataPromise = {
      status: typeof result === "string" ? "error" : "resolved",
      data: typeof result === "number" ? result : null
    };
    results.push(dataPromise);
  }
  console.log(results);
};

await performCalculations();
