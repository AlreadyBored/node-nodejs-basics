import os from 'node:os'
import {Worker} from 'node:worker_threads'

const workerPath = './src/wt/worker.js'

function runWorker(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, {workerData});

    worker.on('message', (data) => {
      resolve({
        status: 'resolved',
        data
      })
    });

    worker.on('error', () => {
      reject({
        status: 'error',
        data: null
      })
    });
  })
}

const performCalculations = async () => {
  const coreNumber = os.cpus().length;
  const inputArray = Array.from({length: coreNumber}, (value, index) => index + 10);

  const promiseArray = inputArray.map(value => runWorker(value))
  const result = await Promise.all(promiseArray);

  console.log(result);
};

await performCalculations();
