import os from 'os';
import path from 'path';
import { Worker } from 'worker_threads';

const INITIAL_VALUE = 10;
const workerPath = path.resolve('src', 'wt', 'worker.js');

const getNthFibonacci = (workerData) =>
  new Promise((res) => {
    const worker = new Worker(workerPath, { workerData });

    worker.on('message', (data) => res({ status: 'resolved', data }));
    worker.on('error', () => res({ status: 'error', data: null }));
  });

const performCalculations = async () => {
  const cpuCounter = os.cpus().length;

  const promises = new Array(cpuCounter).fill(null).map((_, index) => getNthFibonacci(INITIAL_VALUE + index));

  const data = await Promise.all(promises);

  console.log(data);
};

await performCalculations();
