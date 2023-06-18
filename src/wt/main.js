import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import url from 'url'

const performCalculations = async () => {
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = path.join(__dirname, 'worker.js');
    let START_NUM = 10;
    const numOfWorkers = os.cpus().length;
    const  workers = [...Array(numOfWorkers)].map((e, i) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(file, {
              workerData: START_NUM++,
            });
            worker.on('message', msg => resolve({status: 'resolved', data: msg}));
            worker.on('error', _err => reject({ status: 'error', data: null}));
            worker.on('exit', (code) => {
              if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
            });
          })
    })
    Promise.all(workers).then(console.log)
};

await performCalculations();