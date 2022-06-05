import * as os from "os";
import { Worker } from "worker_threads";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const performCalculations = async () => {
  const numOfCpus = os.cpus().length;

  const dataForWorkers = [];

  for (let i = 0; i < numOfCpus; i++) {
    dataForWorkers.push(10 + i);
  }

  const workers = dataForWorkers.map((data) => worker(data));

  const workersData = await Promise.allSettled(workers);
  const result = workersData.map((elem) => {
    return {
      status: elem.status === "fulfilled" ? "resolved" : "error",
      data: elem.status === "fulfilled" ? elem.value : null,
    };
  });
  return result;
};

const worker = (n) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  return new Promise((res, rej) => {
    const worker = new Worker(__dirname + "/worker.js", {
      workerData: n,
    });

    worker.on("message", (msg) => {
      res(msg);
    });

    worker.on("error", (err) => {
      rej(err);
    });
  });
};

console.log(await performCalculations());

