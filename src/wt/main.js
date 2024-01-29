import { Worker } from 'worker_threads'
import { cpus } from 'os';
import path from 'path'
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const performCalculations = async () => {
  const workerPath = path.join(__dirname, 'worker.js')
  const numOfCores = cpus().length
  const resultsArray = []

  for (let i = 0; i < numOfCores; i++) {
    const worker = new Worker(workerPath, { workerData: i })

    worker.on('message', (result) => {
      resultsArray[result.id] = { status: 'resolved', data: result.result }
      if (Object.keys(resultsArray).length === numOfCores) console.log(resultsArray)
    })

    worker.on('error', () => {
      resultsArray.push({ status: 'error', data: null });
      if (Object.keys(resultsArray).length === numOfCores) console.log(resultsArray)
    });
  }
};

await performCalculations();
