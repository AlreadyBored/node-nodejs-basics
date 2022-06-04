'use strict'

import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url'
import path from 'path'
const fName = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'worker.js')

export const launch = num => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(fName);
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
};
