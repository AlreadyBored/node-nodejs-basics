import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const results = [];

  const workers = Array.from({ length: numCores }, (_, index) => {
    const currentDir = path.dirname(fileURLToPath(import.meta.url));
    const workerPath = path.resolve(currentDir, 'worker.js');
    const worker = new Worker(workerPath, { workerData: 10 + index });

    worker.on('message', (message) => {
      results.push(message);
      if (results.length === numCores) {
        console.log(results);
      }
    });

    return worker;
  });

  await Promise.all(workers.map((worker) => new Promise((resolve) => worker.on('exit', resolve))));
};

await performCalculations();