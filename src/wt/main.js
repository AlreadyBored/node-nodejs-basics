import { Worker, isMainThread, workerData } from 'node:worker_threads';
import os from 'node:os';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerModule = path.join(__dirname, 'worker.js');
const incrementalNumber = 10;
const numberOfCores = os.availableParallelism();

const performCalculations = async () => {
  if (isMainThread) {
    const workers = [];
    const output = [];

    for (let i = 0; i < numberOfCores; i++) {
      const worker = new Worker(workerModule, { workerData: i + incrementalNumber });
      workers.push(worker);
    }

    workers.forEach((worker, i) => {
      worker.on('message', (data) => {
        output[i] = {
          status: 'resolved',
          data: data,
        };

        results.length === numberOfCores ? console.log(results) : null;
      });

      worker.on('error', (error) => {
        output[i] = {
          status: 'error',
          data: null,
        };
      });
    });

    workers.forEach((worker) => {
      worker.postMessage(workerData);
    });
  } else {
    const data = workerData;
    parentPort.postMessage(data);
  }
};

await performCalculations();
