import { Worker } from "worker_threads";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

export const performCalculations = async () => {
  let promises = [];
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  for (let i = 0; i < os.cpus().length; i++) {
    promises.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(path.join(__dirname, "worker.js"), {
          workerData: 10 + i,
        });
        worker.on("message", (msg) =>
          resolve({ status: "resolved", data: msg })
        );
        worker.on("error", (err) => resolve({ status: "error", data: null }));
      })
    );
  }

  await Promise.all(promises).then((data) => {
    console.log(data);
  });
};

performCalculations();
