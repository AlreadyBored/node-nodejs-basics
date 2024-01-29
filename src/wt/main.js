import os from 'node:os';
import { Worker } from 'worker_threads';

const cpus = os.cpus().length;
let data = 10;
const url =  new URL('./worker.js', import.meta.url);

const performCalculations = async () => {
const workers = Array.from({ length: cpus }, () => new Promise((resolve) => {
  const worker = new Worker(url, {
    workerData: data++,
  });

  worker.on('message', msg => {
    resolve({
      status: 'resolved',
      data: msg,
    });
  });

  worker.on('error', () => {
    resolve({
      status: 'error',
      data: null,
    });
  });
}));

  const result = await Promise.all(workers)
  console.log(result);
};

await performCalculations();