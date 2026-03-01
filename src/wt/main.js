import { Worker } from 'node:worker_threads';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const numCPUs = os.cpus().length;
  const results = [];
  const workers = [];

  for (let i = 0; i < numCPUs; i++) {
    const worker = new Worker(path.resolve(__dirname, 'worker.js'));
    workers.push(worker);

    const n = 10 + i;

    const promise = new Promise((resolve) => {
      worker.once('message', (msg) => resolve(msg));
      worker.once('error', () => resolve({ status: 'error', data: null }));
    });

    worker.postMessage(n);
    results.push(promise);
  }

  const finalResults = await Promise.all(results);
  console.log(finalResults);

  workers.forEach((w) => w.terminate());
};

await performCalculations();
