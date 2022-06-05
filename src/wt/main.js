'use strict'

import { Worker } from 'worker_threads';
import os from 'os'
import path from 'path'
import { fileURLToPath } from 'url'

const cores = os.cpus().length

const workerDatas = [...Array(cores)].map((core, i) => i + 10)
const errorMained = { status: `error`, data: null }
const fName = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'worker.js')

export const performCalculations = async () => {
  const workerPromises = workerDatas.map(workerData => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(fName, {
        workerData
      });
      worker.on('message', resolve);
      worker.on('error', err => {
        reject(err)
      });
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  })

  return Promise.allSettled(workerPromises).then(workersResults => {
    return workersResults.map(workerResult => {
      let workerResultMapped = errorMained
      if (workerResult.status === `fulfilled`) {
        workerResultMapped = { status: `resolved`, data: workerResult.value }
      }

      return workerResultMapped
    })
  })

  // Write your code here
};