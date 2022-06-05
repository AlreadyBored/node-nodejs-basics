import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const performCalculations = async () => {
  const numOfCpus = os.cpus().length;
  const maxFibonacciNum = numOfCpus + 10;
  const workerPromises = [];
  try {
    for (let index = 10; index < maxFibonacciNum; index++) {
      const workerPromise = createWorkerPromise(index);
      workerPromises.push(workerPromise);
    }
    const resultArr = await Promise.all(workerPromises);
    console.log(resultArr);
    return resultArr;
  } catch (error) {
    console.log(error);
  }
};

function createWorkerPromise(number) {
  return new Promise((resolve) => {
    const worker = new Worker(join(__dirname, 'worker.js'), {
      workerData: number,
    });

    worker.on('message', (calculatedNum) => {
      resolve({
        status: 'resolved',
        data: calculatedNum,
      });
    });

    worker.on('error', () => {
      resolve({
        status: 'error',
        data: null,
      });
    });
  });
};

performCalculations();
