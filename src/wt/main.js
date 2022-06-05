import { Worker } from 'node:worker_threads';
import os from 'os';

export const performCalculations = async () => {
  const worker = new Worker('./src/wt/worker.js', {
    workerData: 11
  });
  worker.on('message', (message) => {
    console.log(message);
  });
};

const numberOfThreads = () => {
  const threads = os.cpus().length;
  const workers = [];
  for (let i = 0; i < threads; i++) {
    const workerPromise = new Promise((resolve, reject) => {
      const worker = new Worker('./src/wt/worker.js', {
        workerData: 10 + i
      });
      worker.on('message', resolve);
      worker.on('error', reject);
    });
    workers.push(workerPromise);
  }
  Promise.allSettled(workers).then((results) =>
    console.log(
      results.map((result) =>
        result.status === 'fulfilled' ? { status: 'resolved', data: result.value } : { status: 'error', data: null }
      )
    )
  );
};

performCalculations();
numberOfThreads();
