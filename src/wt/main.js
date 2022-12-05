import os from 'os';
import wt from 'worker_threads';

async function workerAsync(worker, value) {
  return new Promise((resolve) => {
    worker.postMessage(value);
    worker.once('message', (msg) => resolve({status: 'resolved', data: msg}));
    worker.once('error', (err) => resolve({status: 'error', data: null}));
  });
}

const performCalculations = async () => {
  const res = [];
  for (let i = 10; i < 10 + os.cpus().length; i++) {
    const worker = new wt.Worker('./src/wt/worker.js');
    res.push(await workerAsync(worker, i));
  }
  console.log(res);
};

await performCalculations();