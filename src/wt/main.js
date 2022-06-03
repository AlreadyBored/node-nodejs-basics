import { Worker } from "worker_threads";
import path from "path";
import * as url from "url";
import * as os from "os";

export const performCalculations = async () => {
  const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const filePath = path.resolve(_dirname, "worker.js");
  const numberOfThreads = os.cpus().length;
  const workers = [];
  for (let i = 0; i < numberOfThreads; i++) {
    const worker = new Worker(filePath, { workerData: 10 + i });
    workers.push(
      new Promise((resolve) => {
        worker.on("message", (msg) =>
          resolve({ status: "resolved", data: msg })
        );
        worker.on("error", () => resolve({ status: "error", data: null }));
      })
    );
  }
  const info = await Promise.allSettled(workers);

  return info.map((el) => el.value);
};
console.log(await performCalculations());
