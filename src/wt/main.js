import { cpus } from "os";
import { Worker } from "worker_threads";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const pathToFile = path.join(__dirname, "worker.js");

const performCalculations = async () => {
  let startNumber = 9;
  const cpuCores = cpus();

  const rowResult = await Promise.allSettled(
    cpuCores.map(
      (_, idx) =>
        new Promise((resolve, reject) => {
          const worker = new Worker(pathToFile, {
            workerData: (startNumber += 1),
          });

          worker.on("message", (data) => {
            console.log(`Worker ${idx + 1} sent data to the parent port`);

            resolve(data);
          });

          worker.on("error", (err) => {
            reject(err);
          });

          worker.on("exit", (code) => {
            if (code !== 0)
              reject(new Error(`Worker stopped with exit code ${code}`));
          });
        })
    )
  );

  const result = rowResult.map(({ status, value }) =>
    status === "fulfilled"
      ? {
          status: "resolved",
          data: value,
        }
      : {
          status: "error",
          data: null,
        }
  );

  console.log(result);

  return result;
};

await performCalculations();
