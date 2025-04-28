import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const cpuCount = cpus().length;
  const workers = [];
  const results = [];

  for (let i = 0; i < cpuCount; i++) {
    const worker = new Worker(path.join(__dirname, 'worker.js'));
    const workerData = 10 + i;

    const promise = new Promise((resolve) => {
      worker.on('message', (message) => {
        resolve(message);
      });
      worker.on('error', () => {
        resolve({ status: 'error', data: null });
      });
      worker.on('exit', (code) => {
        if (code !== 0) {
          resolve({ status: 'error', data: null });
        }
      });
    });

    workers.push(worker);
    results.push(promise);
    worker.postMessage(workerData);
  }

  const settledResults = await Promise.all(results);
  console.log(settledResults);

  workers.forEach(worker => worker.terminate());
};

await performCalculations();