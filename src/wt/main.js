import os from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const numberOfCores = os.availableParallelism();
  // const arrOfCores = os.cpus();
  const promises = [];

  for (let i = 0; i < numberOfCores; i++) {
    promises.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(import.meta.dirname + "/worker.js", {
          workerData: 9 + i,
        });

        worker.on("message", (res) =>
          resolve({ status: "resolved", data: res })
        );
        worker.on("error", (err) => reject({ status: "error", data: null }));
      })
    );
  }

  const result = await Promise.all(promises);

  console.log(result);
};

await performCalculations();
