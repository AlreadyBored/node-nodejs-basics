import os from 'node:os';
import { Worker } from 'node:worker_threads';
import __dirname from './__dirname.js';
import { join } from 'node:path';

const numberOfCPU = os.cpus().length;
const workerFile = join(__dirname, 'worker.js');

function d(numWorkers) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerFile);
    worker.postMessage(numWorkers);

    worker.on('message', data => {
      resolve(data);
    });
    worker.on('error', err => {
      reject(err);
    });
  });
}

const performCalculations = async () => {
  const arr = [];
  const initialValue = 10;
  const number = initialValue + numberOfCPU;

  for (let i = initialValue; i <= number; i++) {
    arr.push(d(i));
  }
  const result = await Promise.allSettled(arr);
  const objResults = result.map(item => ({
    status: item.status === 'fulfilled' ? 'resolved' : 'error',
    data: item.value || null,
  }));
  console.log(objResults);
  process.exit();
};

await performCalculations();
