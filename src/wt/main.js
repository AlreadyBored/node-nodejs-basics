import { Worker } from 'worker_threads';
import path from 'path';
import os from 'os';

const runWorker = (number) => {
  return new Promise((resolve) => {
    const worker = new Worker(path.resolve('src/wt/worker.js'));
    worker.on('message', (message) => {
      resolve(message);
    });
    worker.postMessage(number);
  });
};

const performCalculations = async () => {
  const numCPUs = os.cpus().length;
  const promises = [];

  for (let i = 0; i < numCPUs; i++) {
    const number = 10 + i;
    promises.push(runWorker(number));
  }

  const results = await Promise.all(promises);
  console.log(results);
};

await performCalculations();