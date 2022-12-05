import { resolve } from 'path';
import { Worker } from 'worker_threads';
import os from 'os';

const workerPath = resolve('src', 'wt', 'worker.js');

const performCalculations = async () => {
    const promiseArray = [];
    
    for (let index = 0; index < os.cpus().length; index++) {
        const workerPromise = new Promise((res, rej) => {
            const worker = new Worker(workerPath, { workerData: 10 + index } );

            worker.on('message', (data) => res({ status: "resolved", data }));
            worker.on('error', (err) => rej({ status: "error", data: null }));
        })
        promiseArray.push(workerPromise);      
    }

    const result = await Promise.all(promiseArray)
    console.log(result)
};

await performCalculations();