import { Worker } from "worker_threads";
import os from "os";
const numCPUs = os.cpus().length;
let results = [];
const performCalculations = async () => {
  for (let i = 0; i < numCPUs; i++) {
    let worker = new Worker("./src/wt/worker.js");
    worker.postMessage(i + 10);
    worker.on("message", (message) => {
      results.push({ status: "resolved", data: message });
      if (results.length === numCPUs) {
        console.log(results);
      }
    });
    worker.on("error", () => {
      results.push({ status: "error", data: null });
      if (results.length === numCPUs) {
        console.log(results);
      }
    });
  }
};

await performCalculations();
