import { Worker } from 'worker_threads'
import { cpus } from 'os'

const WORKER_PATH = './worker.js'
const START_NUMBER = 10

export const performCalculations = async () => {
  const calculateWorkerWork = (path, workerData) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(path, { workerData })
      worker.on('message', (msg) => resolve(msg))
      worker.on('error', () => reject({ status: 'error', data: null }))
      worker.on('exit', (code) => {
        if (code !== 0) {
          console.log(`Worker stopped with exit code ${code}`)
        }
      })
    })
  }

  try {
    return Promise.all(
      new Array(cpus().length)
        .fill(START_NUMBER)
        .map((item, idx) => calculateWorkerWork(WORKER_PATH, item + idx)),
    )
  } catch (error) {
    console.log(`Error occured with worker: ${error}`)
  }
}

const ewsultWorkers = performCalculations()
ewsultWorkers.then((result) => console.log(result))
