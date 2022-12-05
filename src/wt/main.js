import {cpus} from 'os';
import {Worker} from 'worker_threads';
import {__dirnameGet, log} from "../fs/utils.mjs";

const performCalculations = async () => {
  const dir = __dirnameGet(import.meta.url);
  const workerFile = `${dir}/worker.js`;
  const cpuCount = cpus().length;
  const results = [];

  const promises = [];
  for (let idx = 0; idx < cpuCount; idx += 1) {
    promises.push(new Promise((resolve, reject) => {
      const worker = new Worker(workerFile);
      results.push({data: null, status: 'process'});
      worker.on('message', ({data}) => {
        results[idx] = {data, status: 'resolved'};
        resolve();
      });
      worker.on('error', () => {
        results[idx] = {status: 'error'}
        reject();
      });
      worker.postMessage({n: idx + 10});
    }));
  }
  Promise.allSettled(promises).then(() => {
    log(results);
    process.exit(0);
  });
};

await performCalculations();
