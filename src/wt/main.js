import * as path from 'path';
import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'url';
import { cpus } from 'node:os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = `${__dirname}/worker.js`;
const cpusArr = cpus();

const createWorker = (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, workerData);
    worker.on('message', (data) => {
      resolve(data);
    });
    worker.on('error', (msg) => {
      reject(`An error ocurred: ${msg}`);
    });
    worker.postMessage(workerData);
  });
};

const performCalculations = async () => {
  const promises = cpusArr.map((cpu, index) => {
    return createWorker({ num: 10 + index });
  });

  await Promise.allSettled(promises).then((res) => {
    res.forEach((result) => {
      console.log(
        `${result.value.num}th Fibonacci Number: ${result.value.fib}`
      );
    });
  });
};

await performCalculations();
