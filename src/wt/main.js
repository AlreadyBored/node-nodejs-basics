import {Worker} from 'worker_threads';
import os from "os";

function runService(workerData) {
    return new Promise((resolve, reject) => {
      const worker = new Worker('./src/wt/worker.js', { workerData });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      })
    })
  }

export const performCalculations = async () => {
    const arr = [];
    for (let i = 0, counter = 10; i <= os.cpus().length; i++,counter++) {
      const result = await runService(counter);
      arr.push(result);
    }
    console.log(arr)
    return arr;
};
performCalculations();