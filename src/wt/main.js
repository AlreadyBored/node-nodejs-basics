import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const workerPath = path.join(__dirname, 'worker.js');

  console.log(`Creating ${numCores} worker threads...`);

  const workerPromises = Array.from({ length: numCores }, (_, index) => {
    return new Promise((resolve) => {
      const worker = new Worker(workerPath);
      const fibNumber = 10 + index;

      worker.on('message', (result) => {
        resolve({
          status: 'resolved',
          data: result
        });
        worker.terminate();
      });

      worker.on('error', () => {
        resolve({
          status: 'error',
          data: null
        });
      });

      worker.postMessage(fibNumber);
      console.log(`Sent ${fibNumber} to worker #${index + 1}`);
    });
  });

  const results = await Promise.all(workerPromises);

  console.log('Computation results:');
  console.log(results);

  return results;
};

await performCalculations();
