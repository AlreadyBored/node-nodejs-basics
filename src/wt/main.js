import { Worker } from "worker_threads";
import * as os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const numOfCpus = os.cpus().length;

const crateWorker = (number) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, "worker.js"), {
      workerData: number,
    });
    worker.on("message", (data) => {
      resolve(data);
    });
    worker.on("error", (err) => {
      reject(err);
    });
    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(`Worker stopped with exit code ${code}`);
      }
    });
  });
};

const createWorkerPromisesRecursively = (workerPromises = [], recLevel = 0) => {
  if (recLevel === numOfCpus) {
    return workerPromises;
  }
  workerPromises.push(crateWorker(10 + recLevel));
  return createWorkerPromisesRecursively(workerPromises, ++recLevel);
};

const performCalculations = async () => {
  const workerPromises = createWorkerPromisesRecursively();
  const result = await Promise.allSettled(workerPromises);
  const modifiedResult = result.map((item) => {
    if (item.status === "fulfilled") {
      return { status: "resolve", data: item.value };
    } else {
      return { status: "error", data: null };
    }
  });
  console.log(modifiedResult);
};

await performCalculations();
