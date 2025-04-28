import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const workerPath = path.join(__dirname, 'worker.js');
  const numCores = os.cpus().length;

  const tasks = [];

  for (let i = 0; i < numCores; i++) {
    const n = 10 + i;

    const promise = new Promise((resolve) => {
      const worker = new Worker(workerPath, {
        workerData: n,
      });

      let isResolved = false;

      worker.once('message', (result) => {
        if (!isResolved) {
          isResolved = true;
          if (result && typeof result === 'object' && result.error) {
            resolve({ status: 'error', data: null });
          } else {
            resolve({ status: 'resolved', data: result });
          }
        }
      });

      worker.once('error', () => {
        if (!isResolved) {
          isResolved = true;
          resolve({ status: 'error', data: null });
        }
      });

      worker.once('exit', (code) => {
        if (code !== 0 && !isResolved) {
          isResolved = true;
          resolve({ status: 'error', data: null });
        }
      });
    });

    tasks.push(promise);
  }

  const results = await Promise.all(tasks);
  console.log(results);
};

await performCalculations();
