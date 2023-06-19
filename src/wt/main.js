import os from 'os';
import path from 'path';
import { Worker } from 'worker_threads';

const getCPUCoreCount = () => 3; // os.cpus().length || 1;

const performCalculations = async () => {
  const workers = [];
  const cpuCoreCount = getCPUCoreCount();

  const currentFilePath = new URL(import.meta.url).pathname;
  const dirname = path.dirname(currentFilePath);
  const workerPath = path.join(dirname, 'worker.js');

  for (let i = 0; i < cpuCoreCount; i++) {
    const worker = new Worker(workerPath);
    workers.push(worker);
  }

  let counter = 10;

  for (const worker of workers) {
    worker.postMessage(counter);
    counter++;
  }

  const results = [];

  for (const worker of workers) {
    const result = await new Promise((resolve) => {
      worker.on('message', (data) => resolve({ status: 'success', data }));
      worker.on('error', (error) =>
        resolve({ status: 'error', data: null, error })
      );
    });

    results.push(result);
    worker.terminate();
  }

  return results;
};

console.log('Calculations started');

performCalculations()
  .then((results) => {
    console.log('Results:', results);
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Calculations completed');
  });
