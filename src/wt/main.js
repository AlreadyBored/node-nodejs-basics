import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const workerUrl = new URL('./worker.js', import.meta.url);

const performCalculations = async () => {

  const workerResults = await Promise.all(
    cpus().map((_cpu, index) => {
      return new Promise((resolve) => {
        const worker = new Worker(workerUrl, {
          workerData: index + 10,
        });
        worker.on('message', (data) => resolve({status: 'resolved', data}));
        worker.on('error', () => resolve({status: 'error', data: null}));
      });
    })
  );

  console.log(workerResults);
};

await performCalculations();
