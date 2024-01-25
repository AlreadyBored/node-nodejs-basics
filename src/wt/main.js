import path from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';
import { Worker } from 'worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerFile = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    // Write your code here
    const numCores = cpus().length;
    const workers = [];
    const results = [];

    const createWorker = (data) => {
      return new Promise((resolve) => {
        const worker = new Worker(workerFile, {workerData: data});

        worker.on('message', (data) => resolve({status: 'resolved', data}));
        worker.on('error', () => resolve({status: 'error', data: null}));
      });
    };

    for (let i = 0; i < numCores; i++) {
      workers.push(createWorker(i + 10));
    }

    const workerResults = await Promise.all(workers);

    for (const result of workerResults) {
      results.push(result);
    }

    console.log(results);
};

await performCalculations();