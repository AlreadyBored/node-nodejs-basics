import { Worker } from "worker_threads";
import * as os from "node:os";

function runWorker(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./src/wt/worker.js", { workerData });
    worker.on("message", (value) =>
      resolve({
        status: "resolved",
        data: value,
      })
    );
    worker.on("error", () =>
      reject({
        status: "error",
        data: null,
      })
    );
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

const performCalculations = async () => {
  let workers = [];

  for (let i = 0; i < os.cpus().length; i++) {
    workers.push(runWorker(i + 10));
  }

  Promise.allSettled(workers).then((responses) =>
    console.log(
      responses.map((response) =>
        response.status == "fulfilled" ? response.value : response.reason
      )
    )
  );
};

await performCalculations();
