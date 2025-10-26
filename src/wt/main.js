import { cpus } from 'os';
import { __dirname } from '../utils.js';
import { join } from 'path';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
  const cpuNumbers = cpus();
  let number = 10;

  const workerPromises = await Promise.allSettled(
    cpuNumbers.map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(join(__dirname, 'wt', 'worker.js'), {
          workerData: number++,
        })

        worker.once('message', (msg) => resolve(msg));
        worker.once('error', (err) => reject(err));
      })
    })
  )

  const results = workerPromises.map(({ status, value }) => {
    return {
      status: status === 'fulfilled' ? 'resolved' : 'error',
      data: status === 'fulfilled' ? value : null,
    }
  })

  console.log(results);
  return results;
}

await performCalculations();
