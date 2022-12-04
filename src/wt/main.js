import { Worker } from "worker_threads";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToWorker = path.join(__dirname, "worker.js");
const cpus = process.env.NUMBER_OF_PROCESSORS;
const performCalculations = async () => {
  try {
    let num = 10;
    const arrOfPromisesWorkers = [];

    for (let i = 0; i < cpus; i++) {
      arrOfPromisesWorkers.push(
        new Promise((resolve) => {
          new Worker(pathToWorker, { workerData: num + i })
            .on("message", (res) => {
              console.log(res);
              resolve([{ status: "resolve", data: res }]);
            })
            .on("error", (err) => {
              resolve([{ status: "error", data: null }]);
            });
        })
      );
    }

    const result = await Promise.all(arrOfPromisesWorkers);

    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

await performCalculations();