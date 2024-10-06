import { cpus } from 'os';
import { dirname} from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const workerPath = dirname(fileURLToPath(import.meta.url)) + '/worker.js';

const performCalculations = async () => {
  const cpuCores = cpus();
  let startNumber = 10;

  const workerResults = await Promise.allSettled(cpuCores.map(() => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, {
        workerData: startNumber++,
      });

      worker.on('message', (message) => {
        resolve(message);
      });
      worker.on('error', (message) => {
        reject(message);
      });
    })
  }))

  const results = workerResults.map(({ status, value }) => ({
   status: status === 'fulfilled' ? 'resolved' : 'error',
   data: status === 'fulfilled' ? value : null
  }));

  console.log(results);

  return results;
};

await performCalculations();