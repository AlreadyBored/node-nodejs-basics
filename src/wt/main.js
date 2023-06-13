import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { HELPER } from '../fs/modules/helpers.mjs';

const parseResponse = (res) => {
  const map = {
    fulfilled: 'resolved',
    rejected: 'error',
  };
  return res.reduce((acc, el) => {
    const obj = {
      status: map[el.status],
      data: el.value || null,
    };
    acc.push(obj);
    return acc;
  }, []);
};

const performCalculations = async () => {
  const workerFilePath = HELPER.getDirPath(import.meta.url) + '/worker.js';
  const cpuCount = cpus().length;
  console.log(cpuCount);
  const workers = [];
  for (let i = 0; i < cpuCount; i++) {
    const prom = new Promise((res, rej) => {
      const worker = new Worker(workerFilePath, { workerData: 10 + i });
      worker.on('message', res);
      worker.on('error', rej);
    });
    workers.push(prom);
  }
  Promise.allSettled(workers).then((val) => console.log(parseResponse(val)));
};

await performCalculations();
