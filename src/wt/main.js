import os from "os";
import { Worker } from "worker_threads";
import getPath from "../helper/getPath.js";

const workerPath = getPath(import.meta, "worker.js");

const cores = os.cpus().length;

const performCalculations = async () => {
  const results = await Promise.allSettled(
    new Array(cores).fill().map(
      (_, i) =>
        new Promise((resolve, rejected) => {
          const worker = new Worker(workerPath);

          worker.postMessage({ action: "request", data: 10 + i });

          worker.on("message", ({ data }) => {
            resolve(data);
            worker.terminate();
          });

          worker.on("error", (error) => {
            rejected(error);
            worker.terminate();
          });
        })
    )
  );

  const formattedResults = results.map(({ status, value }) => ({
    status: status === "fulfilled" ? "resolved" : "error",
    data: status === "fulfilled" ? value : null,
  }));

  console.log(formattedResults);
};

await performCalculations();
