import { Worker } from 'node:worker_threads';
import os from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const workerPath = join(__dirname, 'worker.js');

const STATUS = {
    RESOLVED: 'resolved',
    ERROR: 'error',
  }

const performCalculations = async () => {
    function runWorker(data) {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, {
                workerData: { num: data, isError: process.argv[2] }
            })
            
            worker.on('message', msg => resolve({ status: STATUS.RESOLVED, data: msg }));
            worker.on('error', () => resolve({ status: STATUS.ERROR, data: null }));
            worker.on('exit', (code) => {
                if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
            })
        }) 
    }
    
    function createRuns() {
        const arrOfPromises = [];
        const numOfCpu = os.cpus().length ;

        for (let i = 0;  i <= numOfCpu - 1; i++) {
            arrOfPromises.push(runWorker(10 + i))
        }

        return arrOfPromises;
    }

    const runsArr = createRuns();

    
    await Promise.all(runsArr).then(val => console.log(val))
};

await performCalculations();