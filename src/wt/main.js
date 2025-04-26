import { Worker } from 'worker_threads';
import os from 'node:os';
import path from 'node:path';
const performCalculations = async () => {
  // Write your code here
  const p = path.resolve('./src/wt/worker.js');

  const promisitiedWorker = async (i) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(p, {
        workerData: {
          workerN: i,
          number: i + 10,
        },
      });

      worker.on('message', (response) => {
        resolve({ status: 'resolved', data: response.number });
        worker.terminate();
      });
      worker.on('error', () => {
        reject({ status: 'error', data: null });
        worker.terminate();
      });
    });
  };
  const tasks = Array.from({ length: os.cpus().length }, (_, i) =>
    promisitiedWorker(i)
  );
  const results = (await Promise.allSettled(tasks)).map(
    (result) => result.value
  );

  console.log(results);
};

await performCalculations();
