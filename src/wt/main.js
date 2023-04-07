import * as path from 'path';
import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'url';
import { cpus } from 'node:os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workerPath = `${__dirname}/worker.js`;

const createWorker = (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker (workerPath, workerData);
    worker.on('message', (data) => { resolve(data) });
    worker.on('error', (err) => { reject(err) });
    worker.postMessage(workerData);
  });
};


const performCalculations = async () => {
  const promises = cpus().map((cpu, i) => { return createWorker({ num: 10 + i })});

  await Promise.allSettled(promises).then((results) => {
    results.forEach((result) => { console.log(`For: ${result.value.num} Fibonacci Number is: ${result.value.fib}`)});
  });
};

await performCalculations();
