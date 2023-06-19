import {cpus} from 'node:os'
import {Worker} from 'node:worker_threads'

let numberOfCores = cpus().length
const results = []

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./src/wt/worker.js', { workerData });
    worker.on('message', resolve)
    worker.on('error', reject)
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    })
  })
    .then((data) => results.push({ status:'resolved', data}))
    .catch((err) => results.push({ status:'error', data: null}))
}

async function run(i) {
  const result = await runService(i)
}

function createRuns() {
  const promiseArray = []
  for (let i = 10; i < 10 + numberOfCores; i++) {
    promiseArray.push(run(i).catch(err => console.error(err)))
  }
  return promiseArray
}

const performCalculations = async () => {
  await Promise.all(createRuns())
  console.log(results)
};

await performCalculations();