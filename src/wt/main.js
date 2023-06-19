import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerPath = path.resolve(__dirname, 'worker.js');

const performCalculations = async () => {
  const countNthFibonacci = (workerData) =>
    new Promise((resolve) => {
      const worker = new Worker(workerPath, { workerData });

      worker.on('message', (data) => resolve({ status: 'resolved', data }));
      worker.on('error', () => resolve({ status: 'error', data: null }));
    });

  const arrayRequests = Array.from({ length: cpus().length }, (_, index) =>
    countNthFibonacci(index + 10)
  );

  const overallResult = await Promise.all(arrayRequests);

  console.log(overallResult);
};

await performCalculations();
