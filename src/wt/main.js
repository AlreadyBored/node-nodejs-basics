import { parentPort, Worker } from "worker_threads";
import os from "node:os";
const filePath = new URL("./worker", import.meta.url);

const performCalculations = async () => {
  // Write your code here
  const cpus = os.cpus();
  const promises = cpus.map((info, i) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(filePath);
      worker.postMessage(10 + i);
      worker.on("message", (msg) => {
        resolve(msg);
      });
    });
  });

  const result = await Promise.allSettled(promises);
  console.log(result);
  process.exit();
};

await performCalculations();
