import os from 'os';
import path from 'path';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
  const currentDir = fileURLToPath(import.meta.url);
  const pathToWorker = path.join(path.dirname(currentDir), 'worker');
  const cpuCount = os.cpus().length;
  const promises = [];
  for (let i = 0; i < cpuCount; i++) {
    promises[i] = new Promise((resolve, reject) => {
      const worker = new Worker(pathToWorker, {
        workerData: 10 + i,
      });
      worker.on('message', (result) => {
        resolve({ status: 'resolved', data: result });
      });
      worker.on('error', () => {
        reject({ status: 'error', data: null });
      });
    });
  }
  Promise.all(promises).then((result) => {
    console.log(result);
  });
};

await performCalculations();
