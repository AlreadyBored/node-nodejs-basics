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
  const resultArr = [];

  async function run(num) {
    const result = await runService(num + 10);
    resultArr[num] = {
      status: "resolved",
      data: result
    }
  }

  await Promise.all(cores.map((core, idx) => run(idx).catch(() => {
    resultArr[idx] = {
      status: "error",
      data: null
    }
  })))

  console.log(Object.values(resultArr));
};

await performCalculations();
