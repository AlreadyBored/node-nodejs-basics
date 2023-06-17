import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const workerPath = path.join(__dirname, './worker.js')

const numCPUs = os.cpus().length;

function createWorker(workerData) {
    
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, {
            workerData,
        })

        worker.on('message', (data) => {
            resolve({ status: 'resolved', data })
        })  

        worker.on('error', (error) => {
            resolve({ status: 'error', data: null })
        })  
    })
}


const performCalculations = async () => {
    const workerPromises = [];

    for (let i = 0, j = 10; i < numCPUs; i++) {
        workerPromises.push(createWorker(j))
        j++;
    }

    const workersResult = await Promise.all(workerPromises)
    console.log(workersResult);
};

await performCalculations();