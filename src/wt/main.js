import os from "os";
import {Worker} from 'worker_threads'
import {fileURLToPath} from 'url';
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const threads = []

  for (let i = 0, n = 10; i < os.cpus().length; i++, n++) {
    threads.push(new Worker(path.join(__dirname, 'worker.js'), {workerData: n}))
  }

  const promises = threads.map((thread) => {

    return new Promise((resolve, reject) => {
      thread.on('message', data => {
        resolve({
          data,
          status: 'resolved'
        })
      });
      thread.on('error', reject)
    })
  })


  let result = await Promise.allSettled(promises)
  result = result.map(({value}) => value ?? ({data: null, status: 'error'}))
  console.log(result)
};

await performCalculations();

// main.js - implement function that creates number of worker threads (equal to the number of host machine logical CPU cores)
// from file worker.js and able to send data to those threads and to receive result of the computation from them.
// You should send incremental number starting from 10 to each worker. For example: on host machine with 4 cores you
// should create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker, 13 to fourth worker.
// After all workers will finish, function should log array of results into console. The results are array of objects with 2 properties:

// status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
// data - value from worker in case of success or null in case of error in worker
// The results in the array must be in the same order that the workers were created