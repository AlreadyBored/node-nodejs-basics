import { Worker, workerData } from 'node:worker_threads';
import os from 'os';

const performCalculations = async () => {
  const result = [];
  function addNewWorker(i) {
    const worker = new Worker('./wt/worker.js', {
      workerData: {
        value: i
      },
    });
    worker.on('message', message => {
      result.push({
        status: 'resolved',
        data: message.toString()
      })
      if (++i <= 10 + os.cpus().length) addNewWorker(i)
    });
    worker.on('error', () => {
      result.push({
        status: 'error',
        data: null
      })
      if (++i <= 10 + os.cpus().length) addNewWorker(i)
    });
    worker.on('exit', () => {
      if (i === 10 + os.cpus().length)
      process.stdout.write(JSON.stringify(result))
    });
  };

  addNewWorker(10);
};

await performCalculations();