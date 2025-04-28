import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

const workerPath = resolve(__dirname, 'worker.js');

const performCalculations = async () => {
  const numCores = cpus().length; 
  const workers = [];
  const results = [];

  for (let i = 0; i < numCores; i++) {
    workers.push(
      new Promise((resolve) => {
        const worker = new Worker(workerPath);

        const numberToSend = 10 + i; 

        worker.postMessage(numberToSend); 

        worker.on('message', (data) => {
          results.push({ status: 'resolved', data });
          resolve();
        });

        worker.on('error', (err) => {
          results.push({ status: 'error', data: null });
          resolve();
        });
      })
    );
  }

  await Promise.all(workers);

  console.log(results); 
};

await performCalculations();
