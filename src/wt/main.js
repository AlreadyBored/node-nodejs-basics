import path from 'path';
import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const performCalculations = async () => {
  const workers = [];

  for (let i = 0; i < cpus().length; i++) {
    const worker = new Worker(path.resolve(_dirname, 'worker.js'), { workerData: 10 + i });
    workers.push(worker);
  }

  const result = await Promise.all(
    workers.map(
      (worker) =>
        new Promise((resolve) => {
          worker.on('message', (message) => resolve({ status: 'resolved', data: message }));
          worker.on('error', () => resolve({ status: 'error', data: null }));
        }),
    ),
  );

  console.log(result);
};

await performCalculations();
