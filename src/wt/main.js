import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
    // Write your code here
    const workers = [];
    const length = cpus().length;

    for (let i = 10; i < length; i++) {
        workers.push(new Worker('./src/wt/worker.js', { workerData: i }));
    }
    const result = await Promise.all(workers.map((worker) => new Promise((resolve,reject) => {
        worker.on('message', (message) => {
            resolve({ status: 'resolved', data: message })
            // console.log({ status: 'resolved', data: message })
        })
        worker.on('messageerror', (err) => {
            reject({ status: 'error', data: null })
            // console.log({ status: 'error', data: err })
        });
        worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    })))

    console.log(result)
};

await performCalculations();