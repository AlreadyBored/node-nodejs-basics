import { cpus } from "os";
import { Worker, workerData } from "worker_threads";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "/worker.js");

const workerPromise = (number) =>
  new Promise((resolve, reject) => {
    const worker = new Worker(filePath, { workerData: number });
    worker.on("message", (msg) => {
      resolve({
        status: "resolved",
        data: msg,
      });
    });
    worker.on("error", (_error) => {
      reject({
        status: "reject",
        data: null,
      });
    });
  });

export const performCalculations = async () => {
  const workers = [];

  for (let index = 0; index < cpus().length; index++) {
    workers.push(workerPromise(index + 11));
  }

  const result = await Promise.all(workers);
  console.log(result);
};

performCalculations();
