import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const workerFile = path.join(__dirname, 'worker.js');

  const coreCount = Math.max(1, cpus().length);

  const promises = [];
  for (let i = 0; i < coreCount; i++) {
    const n = 10 + i;
    promises.push(new Promise((resolve) => {
      let settled = false;
      const worker = new Worker(workerFile, { workerData: n });

      worker.on('message', (value) => {
        if (!settled) {
          settled = true;
          resolve({ status: 'resolved', data: value });
        }
      });

      worker.on('error', () => {
        if (!settled) {
          settled = true;
          resolve({ status: 'error', data: null });
        }
      });

      worker.on('exit', (code) => {
        if (!settled && code !== 0) {
          settled = true;
          resolve({ status: 'error', data: null });
        }
      });
    }));
  }

  const results = await Promise.all(promises);
  console.log(results);
};

await performCalculations();
