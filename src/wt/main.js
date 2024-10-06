import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
  const runThread = (workerData) => new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData });
    worker.on('message', (data) => resolve({ status: 'resolved', data }));
    worker.on('error', () => reject({ status: 'error', data: null }));
  });

  const cpuCount = os.cpus().length;
  const promises = [];
  for (let i = 0; i < cpuCount; i++) {
    promises.push(runThread(10 + i));
  }
  const ans = await Promise.all(promises);
  console.log(ans);
};

await performCalculations();
