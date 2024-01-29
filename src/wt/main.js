import os from 'os';
import { Worker, workerData } from 'node:worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';
import { cp } from 'fs';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const workerPath = path.join(dirName, "worker.js");
const cpuCount = os.cpus().length;
console.log(cpuCount);
let results = [];
const performCalculations = async () => {
    for (let i = 0; i < cpuCount; i++) {
      const worker = new Worker(workerPath, { workerData: 10+i });
      worker.on('message', msg =>  {
        results.push({status: 'resolved', data: msg});
        if (results.length === cpuCount) {
          console.log(results);
        }
      });
      worker.on('error', err => { 
        results.push({status: 'error', data: null});
        if (results.length === cpuCount) {
          console.log(results);
        }
      });
    }
};

await performCalculations();
