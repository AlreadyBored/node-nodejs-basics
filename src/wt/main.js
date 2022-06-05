import { cpus } from 'os';
import { Worker } from 'worker_threads';

export const performCalculations = async () => {
  const cpuData = cpus();
  const promises = [];

  for (let i = 0; i < cpuData.length; i++) {
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker('./src/wt/worker.js', {
        workerData: 10 + i,
      });

      worker.on('message', (msg) => {
        resolve({
          status: 'resolved',
          data: msg,
        });
      });

      worker.on('error', () => {
        reject({
          status: 'error',
          data: null,
        });
      });
    });

    promises.push(promise);
  }

  const result = await Promise.all(promises);

  return result;
};

console.log(await performCalculations());
