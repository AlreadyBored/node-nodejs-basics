import { Worker, isMainThread, workerData, parentPort } from "worker_threads";

import path from 'path';
import { fileURLToPath } from 'url';

import os from 'os';

const performCalculations = async () => {
  const numberOfCores = os.cpus().length;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  let workerDataNumber = 10;

  return new Promise((resolve, reject) => {
    const results = [];
    const promises = [];


    for (let i = 0; i < numberOfCores; i++) {
        promises[i] = new Promise((workerResolve, workerReject) => {
          const worker = new Worker(__dirname + '/worker.js', {
            workerData: workerDataNumber++,
          });
  
          worker.on('message', (data) => {
            console.log(data)
            results[i] = {status: 'resolved', data };
            workerResolve();
          });
  
          worker.on('error', () => {
            results[i] = {status: 'error', data: null };
            workerReject();
          });
  
        //   worker.on('exit', (code) => {
        //     if (code !== 0) {
        //       workerReject(new Error(`Worker stopped with exit code ${code}`));
        //     }
        //   });
        });
      }

      Promise.allSettled(promises).then(() => {
        console.log(results)
      })
  });
}

await performCalculations();

