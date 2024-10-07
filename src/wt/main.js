import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const performCalculations = async () => {
  const numberOfCores = os.cpus().length;
  const workers = [];
  const results = new Array(numberOfCores);

  // Create a promise for each worker to ensure orderly results
  for (let i = 0; i < numberOfCores; i++) {
    const workerData = 10 + i;
    const worker = new Worker(path.join(__dirname, 'worker.js'));

    workers.push(
      new Promise((resolve) => {
        // Send the data to the worker
        worker.postMessage(workerData);

        // Handle the message from the worker
        worker.on('message', (result) => {
          results[i] = { status: 'resolved', data: result };
          resolve();
        });

        // Handle worker errors
        worker.on('error', () => {
          results[i] = { status: 'error', data: null };
          resolve();
        });
      })
    );
  }

  // Wait for all workers to finish
  await Promise.all(workers);

  // Log the results in the same order that the workers were created
  console.log(results);
};

await performCalculations();
