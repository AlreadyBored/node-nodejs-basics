//https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#worker-threads-srcwt

import { Worker } from "node:worker_threads";
import os from "node:os";
import { getURLPath } from "../lib.js";

const performCalculations = async () => {
  const coresAmount = Array(os.cpus().length).fill();
  const incrementalNumber = 10;

  Promise.all(
    coresAmount.map(
      (_, index) =>
        new Promise((resolve) => {
          const worker = new Worker(getURLPath("./wt/worker.js"), {
            workerData: incrementalNumber + index,
          });
          worker.on("message", (msg) => {
            resolve({ status: "resolved", data: msg });
          });
          worker.on("error", () => resolve({ status: "error", data: null }));
        })
    )
  ).then(console.log);
};

await performCalculations();
