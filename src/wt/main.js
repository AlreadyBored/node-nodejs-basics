// implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file worker.js and able to send data to those threads and to receive result of the computation from them. You should send incremental number starting from 10 to each worker. For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker, 13 to fourth worker. After all workers will finish, function should log array of results into console. The results are array of objects with 2 properties:
// status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
// data - value from worker in case of success or null in case of error in worker

import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const promises = [];

  for (let i = 0; i < numCores; i++) {
    promises.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(new URL("./worker.js", import.meta.url));

        worker.postMessage(10 + i);
        worker.on("message", (result) => {
          resolve({ status: "resolved", data: result });
        });
        worker.on("error", (e) => {
          console.log(e);
          resolve({ status: "error", data: null });
        });
        worker.on("exit", (code) => {
          if (code !== 0) {
            resolve({ status: "error", data: null });
          }
        });
      })
    );
  }

  const results = await Promise.all(promises);
  console.log(results);
};

await performCalculations();
