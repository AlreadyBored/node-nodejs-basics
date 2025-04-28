import { Worker } from 'node:worker_threads';
import os from 'node:os';
import path from 'node:path';

const performCalculations = async () => {
  const numCores = os.cpus().length;

  const workers = Array.from({ length: numCores }, (_, index) => {
    const numberToSend = 10 + index;
  
    return new Promise((resolve) => {
      const worker = new Worker(path.resolve(`${import.meta.dirname}/worker.js`), {
        workerData: numberToSend,
      });

      worker.on('message', (data) => {
        resolve({ status: 'resolved', data });
      });

      worker.on('error', () => {
        resolve({ status: 'error', data: null });
      });

      worker.on('exit', (code) => {
        if (code !== 0) {
          resolve({ status: 'error', data: null });
        }
      });
    });
  });

  const allResults = await Promise.all(workers);
  console.log('Results:', allResults);
};

await performCalculations();