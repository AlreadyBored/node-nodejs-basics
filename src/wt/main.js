import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { cpus } from 'os';
import { Worker } from 'worker_threads';

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerPath = join(__dirname, 'worker.js');

const performCalculations = async () => {
  const numCores = cpus().length;

  const results = await Promise.all(
    Array.from({ length: numCores }, async (_, index) => {
      const additionalNumber = index + 10;

      return new Promise((resolve) => {
        const worker = new Worker(workerPath, { workerData: additionalNumber });

        worker.once('message', (result) => {
          resolve({ status: 'resolved', data: result });
        });

        worker.once('error', (error) => {
          resolve({ status: 'error', data: null });
        });

        worker.once('exit', (code) => {
          if (code !== 0) {
            resolve({ status: 'error', data: null });
          }
        });
      });
    })
  );

  console.log(results);
};

await performCalculations();
