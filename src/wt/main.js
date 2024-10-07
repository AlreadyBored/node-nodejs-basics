import {Worker} from 'node:worker_threads';
import os from 'node:os';

import { fileURLToPath } from 'node:url';
import path, { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const performCalculations = async () => {

    const pathToWorkerFile = path.join(__dirname, 'worker.js');

    // array of worker threads
    const workerPromises = [];

    // function that creates and execute threads
    const createWorker = (number) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(pathToWorkerFile);
            
            // call workers.js
            worker.postMessage(number);
            
            worker.on('message', (data) => {
                resolve(data);
                worker.terminate();
            });
            worker.on('error', (error) => {
                reject(error);
                worker.terminate();
            });
            
        });
    }
    // iterate by logic cpu length
    for (let index = 0; index < os.cpus().length; index++) {
        const incrementalNum = index + 10;
        workerPromises.push(createWorker(incrementalNum));
    }

    const results = await Promise.all(workerPromises);
    console.log(results.join(' '));


};

await performCalculations();