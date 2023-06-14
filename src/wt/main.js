import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {

  const initValue = 10;

  const promises = cpus().map((_, idx) => {
    return new Promise(resolve => {
      const worker = new Worker(path.resolve(__dirname, 'worker.js'), {
        workerData: (initValue + idx),
      });

      worker.on('message', (data) => resolve({ status: 'resolved', data }));
      worker.on('error', () => resolve({ status: 'error', data: null }));
    })
  });

  const results = await Promise.all(promises);
  console.log(results);
};

await performCalculations();