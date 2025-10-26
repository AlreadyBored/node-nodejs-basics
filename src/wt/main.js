import { Worker } from 'node:worker_threads';
import os from 'node:os';
import path from 'node:path';

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const workers = [];
  const results = [];

  for (let i = 0; i < numCores; i++) {
    const worker = new Worker(path.resolve('src', 'wt', 'worker.js'));
    workers.push(worker);

    results.push(new Promise((resolve) => {
      worker.on('message', resolve);
      worker.on('error', () => resolve({ status: 'error', data: null }));
      worker.postMessage(10 + i);
    }));
  }

  const finalResults = await Promise.all(results);
  console.log(finalResults);
};

await performCalculations();
