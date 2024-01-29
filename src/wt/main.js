const { Worker, isMainThread } = require('worker_threads');
const os = require('os');

const createWorkers = (workerScript, totalWorkers) => {
  const workers = [];
  for (let i = 0; i < totalWorkers; i++) {
    const worker = new Worker(workerScript);
    workers.push(worker);
  }
  return workers;
};

const performParallelCalculations = async () => {
  if (isMainThread) {
    const logicalCores = os.cpus().length;
    const workerScript = './worker.js';

    const workers = createWorkers(workerScript, logicalCores);

    const workerResults = [];

    for (let i = 0; i < logicalCores; i++) {
      const worker = workers[i];
      const inputData = 10 + i;

      worker.postMessage({ input: inputData });

      worker.on('message', (result) => {
        workerResults.push({ status: 'resolved', data: result });
        if (workerResults.length === logicalCores) {
          console.log('Results from workers:', workerResults);
        }
      });

      worker.on('error', (error) => {
        workerResults.push({ status: 'error', data: null });
        if (workerResults.length === logicalCores) {
          console.log('Results from workers:', workerResults);
        }
      });
    }
  }
};

performParallelCalculations();