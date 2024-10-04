import { Worker } from 'worker_threads';
import { getCurrentPath } from '../utils.js';
import { cpus } from 'os';

const performCalculations = async () => {
  const workerPath = `${getCurrentPath('wt')}/worker.js`;
  const initialNumber = 10;
  const numCores = cpus().length;

  const promises = [];

  const handleWorker = async (num) => {
    
    const worker = new Worker(workerPath, { workerData: initialNumber + num });

    const result = await new Promise((res, rej) => {
      
      worker.on('message', (data) => {
        res({
          status: 'resolved',
          data,
        });
      });

      worker.on('error', (error) => {
        rej({
          status: 'error',
          data: null,
        });
      });
    });
    
    return result;
  };

  for (let number = 0; number < numCores; number += 1) {
    promises.push(handleWorker(number));
  }

  const result = await Promise.allSettled(promises);

  console.log(result);
};

await performCalculations();