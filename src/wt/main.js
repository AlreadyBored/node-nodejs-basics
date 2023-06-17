import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const filePath = new URL('./worker.js', import.meta.url);
const number = 10;

const performCalculations = async () => {

  const workerResults = await Promise.allSettled(
    cpus().map((_cpu, index) => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(filePath, {
          workerData: index + number,
        });
        worker.on('message', resolve);
        worker.on('error', reject);
      });
    })
  );

  const formattedResults = workerResults.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: status === 'fulfilled' ? value : null,
  }));

  console.log(formattedResults);
};

await performCalculations();
