import os from 'os';
import { Worker } from 'node:worker_threads';
import { fileURLToPath } from "url";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerFile = path.join(__dirname, "worker.js");


const cpuNum= os.cpus().length

const performCalculations = async () => {
    // Write your code here
    const promiseArr = [];
    let startNum = 10;
    for (let i = 0; i < cpuNum; i++) {
      promiseArr.push(
        new Promise((resolve, reject) => {
          const worker = new Worker(workerFile);
          worker.postMessage(startNum);
          worker.on('message', (result) => resolve({ status: 'resolved', data: result }));
          worker.on('error', (error) => resolve({ status: error, data: null }));
          startNum += 1;
        })
      )
    }

    const resultArr = (await Promise.allSettled(promiseArr)).map(result => result.value)
    console.log(resultArr);
};

await performCalculations();