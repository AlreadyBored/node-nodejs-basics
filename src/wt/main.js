import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

export const performCalculations = async () => {
  const filename = fileURLToPath(import.meta.url);
  const workerPath = join(dirname(filename), 'worker.js');

  const arr = new Array(cpus().length).fill(0);

  Promise.all(
    arr.map((_, idx) => {
      const w = new Worker(workerPath, { workerData: 10 + idx });
      return new Promise((resolve, rej) => {
        w.on('message', (res) => {
          resolve({
            status: 'resolved',
            data: res,
          });
        });
        w.on('error', () => {
          resolve({
            status: 'error',
            data: null,
          });
        });
      });
    })
  ).then((res) => console.log(res));
};

performCalculations();
