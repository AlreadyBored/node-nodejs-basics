import os from 'os';
import { Worker } from 'worker_threads';
import path from 'path';

const performCalculations = async () => {
  const cpu_len = os.cpus().length;
  const workers = [];
  const results = [];
  const file = path.join(process.cwd(), 'worker.js');

  return new Promise((resolve) => {
    for (let i = 0; i < cpu_len; i++) {
      const worker = new Worker(file);
      const number_to_send = 10 + i;

      worker.postMessage(number_to_send);

      worker.on('message', (result) => {
        results[i] = result;

        if (results.length === cpu_len) {
          resolve(results);
        }
      });

      worker.on('error', () => {
        results[i] = { status: 'error', data: null };

        if (results.length === cpu_len) {
          resolve(results);
        }
      });

      workers.push(worker);
    }
  });
};

await performCalculations();
