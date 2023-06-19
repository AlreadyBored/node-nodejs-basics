import os from 'node:os'
import { Worker } from 'node:worker_threads'
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const INITIAL_NUMBER = 10

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workerPath = __dirname + '/worker.js'

const performCalculations = async () => {
    const cpusAmount = os.cpus().length;

    const calculateByWorker = (workerData) => new Promise((resolve) => {
        new Worker(workerPath, {
            workerData
        }).on('message', data => resolve({
            status: 'resolved',
            data
        })).on('error', () => resolve({
            status: 'error',
            data: null
        }))
    })

    const workerThreads = new Array(cpusAmount)
        .fill(null)
        .map((_, index) => calculateByWorker(index + INITIAL_NUMBER))


    const results = await Promise.all(workerThreads)

    console.log(results)
};

await performCalculations();
