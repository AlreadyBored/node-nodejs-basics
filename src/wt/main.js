import os from 'os';
import { Worker } from 'worker_threads'
import path from "path";
import {fileURLToPath} from "url";

const workerPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'worker.js');

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
  })
}

const performCalculations = async () => {
  const cores = os.cpus();
  const resultObj = {};

  async function run(num) {
    const result = await runService(num);
    resultObj[num] = {
      status: "resolved",
      data: result
    }
  }

  await Promise.all(cores.map((core, idx) => run(idx + 10).catch(() => {
    resultObj[idx + 10] = {
      status: "error",
      data: null
    }
  })))

  console.log(Object.values(resultObj));
};

await performCalculations();
