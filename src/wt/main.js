import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';
import os from 'node:os';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const numberOfCPU = +os.cpus().length;
  const workers = [];
  const results = new Array(numberOfCPU);
  const promises = [];
  const workerPath = path.join(__dirname, 'worker.js');
  for (let i = 0; i < numberOfCPU; i++) {
    promises.push(
      new Promise((resolve) => {
        const newWorker = new Worker(workerPath, {
          workerData: 10 + i,
        });
        workers.push(newWorker);

        newWorker.on('message', (msg) => {
          results[i] = { status: 'resolved', data: msg };
          resolve();
        });

        newWorker.on('error', (error) => {
          results[i] = { status: 'error', data: null };
          resolve();
        });
      })
    );
  }
  await Promise.all(promises);
  console.log(results);
};

await performCalculations();
