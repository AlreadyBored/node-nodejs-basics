import { cpus } from 'node:os';
import { resolve } from 'node:path';
import { Worker, workerData } from 'node:worker_threads';

const performCalculations = async () => {
  const numOfThreads = cpus().length;
  const results = [];
  //const resultObj = {};

  for (let i = 0; i <= numOfThreads - 1; i++) {
    const worker = new Worker('./src/wt/worker.js', {
      workerData: i + 10,
    });
    const result = await new Promise((resolve) => {
      worker.on('message', (msg) => {
        results.push({ status: 'resolved', data: msg });
      });
      worker.on('exit', ()=>{
        resolve();
      })
    });
  }
  //console.log(results)
};

await performCalculations();

//console.log(cpus().length);
