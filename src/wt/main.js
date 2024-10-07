import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
  const countCPUs = os.cpus().length;
  const results = new Array(countCPUs);
  let workersDone = 0;

  for (let i = 0; i < countCPUs; i++) {
    const worker = new Worker('./worker.js');
    const n = 10 + i;

    worker.on('message', (result) => {
      results[i] = { status: 'resolved', data: result};
      workersDone++;
      if (workersDone === countCPUs) {
        console.log(results);
        process.exit(0);
      }
    });

    worker.on('error', (error) => {
      results[i] = { status: 'error', data: null };
      workersDone++;
      if (workersDone === countCPUs) {
        console.log(results);
        process.exit(0);
      }
    });

    worker.on('exit', (code) => {
      results[i] = { status: 'error', data: null };
      workersDone++;
      if (workersDone === countCPUs) {
        console.log(results);
        process.exit(0);
      }
    });

    worker.postMessage(n);
  }
};

await performCalculations();
