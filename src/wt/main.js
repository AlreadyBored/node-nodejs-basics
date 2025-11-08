import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const main = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const workerPath = path.join(__dirname, 'worker.js');

  const numCores = os.cpus().length;
  const startValue = 10;

  const promises = Array.from({ length: numCores }, (_, i) => {
    return new Promise((resolve) => {
      const worker = new Worker(workerPath);
      const value = startValue + i;

      worker.postMessage(value);

      worker.on('message', (result) => {
        resolve({ status: 'resolved', data: result });
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
  });

  const results = await Promise.all(promises);
  console.log(results);
};

await main();
