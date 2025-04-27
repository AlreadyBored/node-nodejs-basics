import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const WORKER_PATH = './src/wt/worker.js'
const START_NUM = 10;

const performCalculations = async () => {
    const cpuCount = cpus().length;
    const result = [];
    for (let i = 0; i < cpuCount; i++) {
        result.push(runWorkers(START_NUM + i));
    }
    console.log(await Promise.all(result));
};

const runWorkers = async (n) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(WORKER_PATH, {workerData: n});
        worker.on('message', (res) => resolve({status: 'resolved', data: res}));
        worker.on('error', () => resolve({status: 'error', data: null}));
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        })
    })
}

await performCalculations();