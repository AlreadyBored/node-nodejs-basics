import { Worker } from "worker_threads";

const performCalculationsInWorker = async (input) => {
  return new Promise((resolve) => {
    const worker = new Worker("./src/wt/worker.js");
    worker.on("message", (result) => {
      console.log(`main.js --- received: worker.on("message", (${result})`);
      worker.terminate();
      resolve(result);
    });
    console.log(`main.js --- invoke: worker.postMessage(${input});`);
    worker.postMessage(input);
  });
};

const performCalculations = async () => {
  const result = await performCalculationsInWorker(1);
  console.log(result);
};

await performCalculations();
