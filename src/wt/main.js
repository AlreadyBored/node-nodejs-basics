import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
const performCalculations = async () => {
    const cpuCount = os.cpus().length;
    const results = new Array(cpuCount)
    const workers = []
    const createWorker = (index, nums) => {
        return new Promise((resolve) => {
            const worker = new Worker(path.resolve('src/wt/worker.js'))
            workers.push(worker)
            worker.once('message', (message) => {
              results[index] = message
              resolve()
            })
            worker.once('error', () => {
                results[index] = { status: 'error', data: null }
                resolve()
            })
            worker.postMessage(nums)
        })
    }
    const promises = [];

    for (let i = 0; i < cpuCount; i++) {
      const number = 10 + i;
      promises.push(createWorker(i, number));
    }

    await Promise.all(promises);
    console.log(results);
};

await performCalculations();