import { cpus } from "node:os";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
  let startNumber = 10;

  const createWorker = (index) =>
    new Promise((resolve, reject) => {
      const worker = new Worker(new URL("./worker.js", import.meta.url), {
        workerData: startNumber + index,
      });

      worker.postMessage(startNumber + index);

      worker.on("message", (msg) => {
        resolve(msg);
      });

      worker.on("error", (error) => {
        reject();
      });
    }).then(
      (data) => ({ status: "resolved", data }),
      () => ({ status: "error", data: null })
    );

  const result = await Promise.all(
    cpus().map((core, index) => createWorker(index))
  );

  console.log(result);
};

await performCalculations();
