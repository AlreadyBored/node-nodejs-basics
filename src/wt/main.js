import { Worker, isMainThread, workerData } from 'node:worker_threads';
import os from 'os';

function createWorkerThreads(workerScriptPath, numWorkers) {
  const workers = [];
  const increment = 1;

  for (let i = 0; i < numWorkers; i++) {
    const worker = new Worker(workerScriptPath, { workerData: i + 10 });
    workers.push(worker);
  }

  return workers;
}


const performCalculations = async (workerScriptPath, numWorkers) => {
    const workers = createWorkerThreads(workerScriptPath, numWorkers);
    const results = [];
  
    workers.forEach((worker) => {
      worker.on('message', (result) => {
        results.push({'resolved': result});
  
        if (results.length === numWorkers) {
          console.log('Results:', results);
        }
      });
  
      worker.on('error', (error) => {
        console.error(error);
        results.push({'error': null});
      });
  
      worker.on('exit', (code) => {
        if (code !== 0)
          console.error(`Worker stopped with exit code ${code}`);
      });
    });
};
if (isMainThread) {
    const numCPUs = os.cpus().length;
    performCalculations('./src/wt/worker.js', numCPUs);
}
await performCalculations();