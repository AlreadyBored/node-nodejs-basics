import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import os from 'os';
import { Worker } from 'node:worker_threads';

const __dirname = dirname(fileURLToPath(import.meta.url));

const createWorker = (n) => {
  return new Promise(( resolve, reject ) => {
    const worker = new Worker(join(__dirname, 'worker.js'), {workerData: n});

    worker.on('message', (data) => {
      resolve({status: 'resolved', data});
    });

    worker.on('error', () => {
      reject({status: 'error', data: null});
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

  const thread_results = await Promise.allSettled(workerPromises);

  const result_values = thread_results.map((result) => {
    return (result.value) ? result.value : result.reason;
  });

  console.log(result_values);
};

await performCalculations();
