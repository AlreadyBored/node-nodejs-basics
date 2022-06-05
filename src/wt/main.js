import { Worker, workerData } from "node:worker_threads";
import os from "os";

export const performCalculations = async () => {
  const threadsNum = os.cpus();
  let fibData = 10;
  const promiceArray = [];

  for (let index = 1; index <= threadsNum.length; index++) {
    promiceArray.push(
      new Promise((resolve, reject) => {
        new Worker("./src/wt/worker.js", { workerData: fibData++ })
          .on("message", (data) => resolve({ status: "resolved", data }))
          .on("error", () => resolve({ status: "error", data: null }));
      })
    );
  }
  return await Promise.allSettled(promiceArray).then((val) => val.map(item => console.log(item.value)));
};

await performCalculations();
