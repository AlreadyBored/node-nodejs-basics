import { cpus } from 'node:os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
  const numCPUs = cpus().length;

  const promisesArray = [];

  for(let i = 0; i < numCPUs; i++){
    const worker = await new Worker('./src/wt/worker.js', {workerData: i + 10});

    promisesArray.push(await new Promise((res, rej) => {
      worker.on('message', (msg) => {
        res(msg);
      });
      worker.on('error', (err) => {rej(null)})
    }).then((msg) => {
      return { status: 'resolved', data: msg }
    }).catch(err => ({status: 'error', data: null})));

  }
  const result = promisesArray;
  console.log(result)
};

await performCalculations();