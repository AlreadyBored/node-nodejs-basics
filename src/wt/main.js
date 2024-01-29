import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const cpuCount = cpus().length;

  const workers = [];
  const results = [];
  let finishedWorkers = 0;

  function checkCompletion() {
    if (results.every(result => result !== undefined)) {
      console.log(results);
    }
  }

  for (let i = 0; i < cpuCount; i++) {
    const worker = new Worker(__dirname + '/worker.js', { workerData: i + 10 });

    // Event listener for messages from workers
    worker.on('message', message => {
      results[i] = message;
    });

    worker.on('exit', message => {
      finishedWorkers++;
      if (finishedWorkers === cpuCount) {
        checkCompletion();
      }
    });

    // Event listener for errors from workers
    worker.on('error', error => {
      results[i] = { status: 'error', data: null };
      checkCompletion();
    });

    workers.push(worker);
  }
};

await performCalculations();
