import {
  Worker,
  isMainThread,
  setEnvironmentData,
  getEnvironmentData,
  parentPort,
  workerData,
} from "node:worker_threads";
import path from "path";
import { fileURLToPath } from "url";
import os from "os";
import process from "node:process";

async function createWorkerThread(inputData) {
  // Script file.
  const __filename = fileURLToPath(import.meta.url);
  // Folder of script file.
  const __dirname = path.dirname(__filename);
  //workder thread should be as promise
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, "worker.js"), {
      workerData: inputData,
    });
    //send data to workder.
    worker.postMessage(inputData);
    //add listeners for worker.
    worker.on("message", (message) => {
      if (message.status === "resolved") {
        resolve({ status: "resolved", data: message.data });
      } else if (message.status === "error") {
        resolve({ status: "error", data: null });
      }
    });

    worker.on("error", (err) => {
      resolve({ status: "error", data: null });
    });

    worker.on("exit", (code) => {
      if (code !== 0) {
        resolve({ status: "error", data: null });
      }
    });
  });
}

const performCalculations = async () => {
  //Cntrl + C = exit
  process.on("SIGINT", () => {
    process.exit();
  });

  // Script file.
  const __filename = fileURLToPath(import.meta.url);
  // Folder of script file.
  const __dirname = path.dirname(__filename);
  const allWorkers = [];
  let cpusCount = os.cpus().length;
  for (let i = 0; i < cpusCount; i++) {
    //Create workers
    const myWorker = createWorkerThread(10 + i);
    allWorkers.push(myWorker);
  }
  //Wait when all will resolved or rejected.
  Promise.allSettled(allWorkers).then((data) => {
    let res = [];
    // Prepares output data
    data.reduce((acc, cur) => {
      return res.push({ status: cur.value.status, data: cur.value.data });
    }, res);
    //output
    console.log(res);
  });
};

await performCalculations();