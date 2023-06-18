import { Worker } from "node:worker_threads";
import { cpus } from "node:os";

const performCalculations = async () => {
  const startFbNumber = 10;
  const coreNumber = cpus().length;

  const tasks = Array.from(Array(coreNumber).keys()).map((i) => {
    return createWorker(i, startFbNumber + i);
  });

  const tasksResult = await Promise.all(tasks);

  /*
  added sorting based in worker index provided during createWorker() call
  its possible to sort by "data" field, since for each next task result be bigger
  than previous one

  but sorting objects by index more abstract (and stable) of exact data value
  */
  const result = tasksResult
    //sort results by index
    .sort((a, b) => {
      return a.index - b.index;
    })
    //and remove indexes
    .map((taskResult) => {
      return { status: taskResult.status, data: taskResult.data };
    });

  console.log(result);
};

/** creates worker and executes it worker thread
 * @param index - worker index, used for sorting results
 * @param data - payload, used for calculating fibonacci number
 */
const createWorker = (index, data) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./src/wt/worker.js", { workerData: data });
    worker.on("message", (result) => {
      resolve({ status: "resolved", data: result, index: index });
    });
    worker.on("error", () => {
      reject({ status: "error", data: null, index: index });
    });
    worker.on("exit", (code) => {
      if (code !== 0) {
        reject({ status: "error", data: null, index: index });
      }
    });
  });
};

await performCalculations();
