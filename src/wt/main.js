import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, 'worker.js');

export const performCalculations = async () => {
  const coreCount = cpus().length;

  const runWorker = (n) =>
    new Promise((resolve) => {
      const worker = new Worker(workerPath, { workerData: n });

      let settled = false;
      const resolveOnce = (value) => {
        if (!settled) {
          settled = true;
          resolve(value);
        }
      };

      worker.on('message', (value) =>
        resolveOnce({ status: 'resolved', data: value })
      );

      worker.on('error', () =>
        resolveOnce({ status: 'error', data: null })
      );

      worker.on('exit', (code) => {
        if (code !== 0) resolveOnce({ status: 'error', data: null });
      });
    });

  const promises = Array.from({ length: coreCount }, (_, i) => runWorker(10 + i));
  const results = await Promise.all(promises);

  console.log(results);
  return results;
};

await performCalculations();
