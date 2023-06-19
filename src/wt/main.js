import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workerFilePath = join(__dirname, 'worker.js');

const performCalculations = async () => {
  const numCores = cpus().length;
  //console.log('num of logical cpu cores:', numCores);
  const workers = [];
  const results = [];

  for (let i = 0; i < numCores; i++) {
    const worker = new Worker(workerFilePath, { workerData: i + 1 });
    workers.push(worker);
  }

  const promises = workers.map((worker) => {
    return new Promise((resolve) => {
      worker.on('message', (message) => {
        resolve(message);
      });
      worker.on('error', (error) => {
        resolve({ status: 'error', data: null });
      });
    });
  });

  const workerResults = await Promise.all(promises);
  results.push(...workerResults);

  console.log('result array ', results);
};

await performCalculations();
