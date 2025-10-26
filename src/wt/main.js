import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
  
  const runWorker = (n) =>
    new Promise((resolve) => {
      const worker = new Worker(new URL('./worker.js', import.meta.url), {
        workerData: n, type: 'module'
      });

      worker.once('message', (value) => {
        resolve({ status: 'resolved', data: value });
      });

      worker.once('error', (err) => {
        console.error('worker error:', err)
        resolve({ status: 'error', data: null });
      });

      worker.once('exit', (code) => {
        if (code !== 0) {
          resolve({ status: 'error', data: null });
        }
      });
  });

  const coreCount = cpus().length;
  const start = 10;

  const workerPromises = Array.from({ length: coreCount }, (_, i) =>
    runWorker(start + i)
  );

  const results = await Promise.all(workerPromises);
  console.log(results);
};

await performCalculations();
