import { Worker } from 'worker_threads';
import os from 'os';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
  const numCPUs = os.cpus().length;
  let promises = [];
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const workerFile = join(__dirname, 'worker.js');

  for (let i = 0; i < numCPUs; i++) {
    const worker = new Worker(workerFile, { workerData: { n: 10 + i } });

    const promise = new Promise((resolve, reject) => {
      worker.on('message', (result) => {
        resolve({
          status: 'resolved',
          data: result,
        });
      });

      worker.on('error', () => {
        reject({
          status: 'error',
          data: null,
        });
      });
    });

    promises.push(promise);
  }

  const promisesResult = await Promise.allSettled(promises);
  console.log(promisesResult.map(result => result.value));
};

await performCalculations();