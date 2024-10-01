import {Worker} from "worker_threads";
import {cpus} from 'os';

const workerPath = "./worker.js";

function startWorker(workerData) {
    return new Promise((resolve, reject) => {
        new Worker(workerPath, {workerData})
            .on('message', (success) => resolve({status: 'resolved', data: success}))
            .on('error', (e) => reject(({status: 'error', data: e})));
    })
}


const performCalculations = async () => {
    const cpuCount = cpus().length;
    const initNumber = 10;
    const promisesArray = [];
    for (let i = 0; i < cpuCount; i++) {
        promisesArray.push(startWorker(initNumber + i));
    }
    Promise.all(promisesArray).then(console.log).catch(console.log)
};

await performCalculations();
