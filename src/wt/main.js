import os from 'os';
import { Worker } from 'node:worker_threads';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const createWorker = (n) => {
  return new Promise(( resolve, reject ) => {
    const worker = new Worker(join(__dirname, 'worker.js'), { workerData: n });

    worker.on('message', (data) => {
      resolve(data);
    });

    worker.on('error', (error) => {
      reject({ status: 'error', data: null});
    });
  });
}

const performCalculations = async () => {
  const cpuCores = os.cpus();
  const numberOfThreads = cpuCores.length;

  let number = 10;

  const workerPromises = [];

  for (let i = 0; i < numberOfThreads; i += 1) {
    workerPromises.push(createWorker(number));
    number += 1;
  }

  const thread_results = await Promise.all(workerPromises);

  console.log(thread_results);
};

await performCalculations();
