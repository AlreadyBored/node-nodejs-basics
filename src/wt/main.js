import {Worker} from "worker_threads";
import {pipeline} from "stream/promises";

const performCalculations = async () => {
  // Write your code here
  const worker = new Worker("./src/wt/worker.js", {
    workerData: {
      value: 15,
    },
  });

  worker.on("message", (result) => {
    console.log(result);
  });
};

await performCalculations();
