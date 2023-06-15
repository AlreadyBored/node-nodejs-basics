import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
  const numCPUs = os.cpus().length;
  const workers = [];
  const promises = [];

  for(let i = 0; i < numCPUs; i++) {
    const worker = new Worker(new URL('./worker.js', import.meta.url), {
      workerData: 10 + i, 
    });

    const promise = new Promise((resolve, reject) => {
      worker.on('message', (message) => {
        resolve({status: 'resolved', data: message});
      });

      worker.on('error', (error) => {
        console.error(`An error occurred in worker: ${error}`);
        reject({status: 'error', data: null});
      });

      worker.on('exit', (code) => {
        if (code !== 0) {
          console.error(`Worker stopped with exit code ${code}`);
          reject({status: 'error', data: null});
        }
      });
    });

    workers.push(worker);
    promises.push(promise);
  }

  const results = await Promise.all(promises.map(p => p.catch(e => e)));

  console.log(results);

  workers.forEach(worker => worker.terminate());
};

performCalculations();