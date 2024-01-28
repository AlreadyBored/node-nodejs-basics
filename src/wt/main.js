import { cpus } from 'node:os'
import { Worker } from 'node:worker_threads'

const performCalculations = async () => {
  // Write your code here

  const FILE_WORKER = './worker.js'
  const FILE_WORKER_URL = new URL(FILE_WORKER, import.meta.url)
  let INIT_WORKER_NUMBER = 10

  const workerFibonacci = (workerData) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(FILE_WORKER_URL, { workerData })

      worker.on('message', (data) => resolve({ status: 'resolved', data }))
      worker.on('error', () => reject({ status: 'rejected', data: null }))
    })
  }

  const promises = []
  for (let i = 0; i < cpus().length; i++) {
    promises.push(workerFibonacci(++INIT_WORKER_NUMBER))
  }

  const results = await Promise.allSettled(promises)
  console.log(results.map((el) => el?.value || el?.reason))
}

await performCalculations()
