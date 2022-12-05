import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

import { join, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const results = [];
  const cpusLength = cpus().length;
  let currentCpu = 1;
  let indexWorker = 10;

  while (currentCpu <= cpusLength) {
    const pathFile = join(__dirname, 'worker.js');

    const promissWorker = new Promise((resolve, reject) => {
      const worker = new Worker(pathFile, { workerData: indexWorker });

      worker.on('message', (data) => {
        resolve({ status: 'resolved', data: data.result });
      });

      worker.on('error', () => {
        resolve({ status: 'error', data: null });
      });
    });

    results.push(promissWorker);

    currentCpu += 1;
    indexWorker += 1;
  }

  const allResult = await Promise.all(results);

  console.log(allResult);
};

await performCalculations();
