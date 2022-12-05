import { Worker } from "worker_threads";
import path from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = path.join(__dirname, "worker.js");
let cpuCores = Array.from(Object.keys(os.cpus())).length;
const performCalculations = async () => {
  let promisesArr = [];
  for (let i = 0; i < cpuCores; i++) {
    promisesArr.push(
      new Promise((res, rej) => {
        let worker = new Worker(src, { workerData: 10 + i });
        worker.on("message", (fib) => {
          if (typeof fib === "number") {
            res({ status: "resolved", data: fib });
          } else {
            rej({ status: "error", data: null });
          }
        });
      })
    );
  }
  Promise.all(promisesArr).then((values) => console.log(values));
};

await performCalculations();
