import path from "path";
import { cpus } from "os";
import { Worker } from "worker_threads";
import { getDirName } from "../utils.js";

const __dirname = getDirName(import.meta.url);
const workerFile = path.join(__dirname, "worker.js");

const cpusAmount = cpus().length;

const performCalculations = async () => {
  const workers = new Array(cpusAmount).fill().map(
    (_, index) =>
      new Promise((resolve) => {
        const worker = new Worker(workerFile, { workerData: 10 + index });
        worker.once("message", (data) => resolve({ status: "resolved", data }));
        worker.once("error", () => resolve({ status: "error", data: null }));
      })
  );

  return await Promise.all(workers);
};

console.log(await performCalculations());
