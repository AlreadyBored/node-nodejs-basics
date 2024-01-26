import os from 'os';
import {Worker} from 'worker_threads';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostMachineCoresCount = os.cpus().length;

const performCalculations = async () => {
  const workerPath = path.resolve(__dirname, './worker.js');
  const workersCount = hostMachineCoresCount;

  const dataForWorkers = new Array(workersCount).fill(10).map((value, index) => value + index);

  const workerPromises = dataForWorkers.map(value => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, {
        workerData: value
      });

      worker.on('message', value => {
        resolve({status: 'resolved', data: value});
        worker.terminate();
      });

      worker.on('error', () => {
        resolve({status: 'error', data: null});
        worker.terminate();
      });
    });
  });

  const results = await Promise.all(workerPromises);

  console.log(results);
};

await performCalculations();
