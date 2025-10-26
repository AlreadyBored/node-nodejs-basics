import os from 'node:os';
import { Worker } from 'node:worker_threads';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
  const cores = os.cpus().length;
  const start = 10;

  const tasks = Array.from({ length: cores }, (_, i) => {
    const n = start + i;

    return new Promise((resolve) => {
      const w = new Worker(workerPath, { workerData: n });
      let settled = false;

      w.once('message', (value) => {
        settled = true;
        resolve({ status: 'resolved', data: value });
      });

      w.once('error', () => {
        if (!settled) resolve({ status: 'error', data: null });
      });

      w.once('exit', (code) => {
        if (code !== 0 && !settled) resolve({ status: 'error', data: null });
      });
    });
  });

  const results = await Promise.all(tasks);
  console.log(results);
};

await performCalculations();
