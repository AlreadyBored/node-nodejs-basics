import { Worker } from "worker_threads";
import os from "os";
function createThreads(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", { workerData });
    worker.on("message", (data) => resolve(data));
    worker.on("error", (err) => reject(err));
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(
          new Error(`Stop: ${code}`)
        );
    });
  });
}

export const performCalculations = async () => {
  const arr = [];
  for (let i = 0, counter = 10; i <= os.cpus().length; i++) {
    const result = await createThreads(counter);
    ++counter;
    arr.push(result);
  }
  console.log(arr)
  return arr;
};

performCalculations().catch((e) => console.log(e));
