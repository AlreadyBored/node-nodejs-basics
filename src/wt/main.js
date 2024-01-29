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
      if (resultsArray.length === numOfCores) console.log(resultsArray)
    })

    worker.on('error', () => {
      resultsArray.push({ status: 'error', data: null });
      if (resultsArray.length === numOfCores) console.log(resultsArray)
    });
  }

};

await performCalculations();

// main.js - implement function that creates number of worker threads (equal to the number of host machine
//  logical CPU cores) from file worker.js and able to send data to those threads and to receive result 
// of the computation from them. You should send incremental number starting from 10 to each worker. 
// For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker,
//  11 to second worker, 12 to third worker, 13 to fourth worker. After all workers will finish, 
// function should log array of results into console. The results are array of objects with 2 properties:
// status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
// data - value from worker in case of success or null in case of error in worker
// The results in the array must be in the same order that the workers were created