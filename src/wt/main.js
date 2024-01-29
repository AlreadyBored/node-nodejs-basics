import {Worker, parentPort, workerData} from 'worker_threads'
import os from "os";
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
const performCalculations = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const cpuNumb = os.cpus().length;
    const workers = [];
    const promises = [];
    for (let i = 0; i < cpuNumb; i += 1) {
      const worker = new Worker(path.resolve(__dirname, 'worker.js'), {workerData: i + 10});

      const promise = new Promise((resolve, reject) => {
        worker.on('message', (msg) => {
          workers[i] = {
            status: 'resolved',
            data: msg,
          }
          resolve();
        });

        worker.on('error', (err) => {
          workers[i] = {
            status: 'error',
            data: null,
          }
          resolve();
        });
      });
      promises.push(promise);
    }
    Promise.all(promises).then(() => {
      console.log(workers);
    })
};

await performCalculations();