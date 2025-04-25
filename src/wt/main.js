import { Worker } from 'worker_threads';
import os from 'os';
const numCPUs = os.cpus().length;
const performCalculations = async () => {
  const workers = [];

  for (let i = 0; i < numCPUs; i++) {
    workers.push(new Worker('./src/wt/worker.js', { workerData: i + 10 }));
  }

  const results = await Promise.allSettled(workers.map(worker => {
    return new Promise((resolve, reject) => {
      worker.on('message', message => {
        resolve({ status: 'resolved', data: message });
      });
      worker.on('error', error => {
        reject({ status: 'error', data: null });
      });
    });
  }));
  console.log(results);
};

await performCalculations();