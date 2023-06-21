import { Worker, workerData } from 'node:worker_threads';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import os from 'os';


const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);
const fileWorker = join(__dirname, 'worker.js');

const numberOfCores = os.cpus().length;
const incrementalStart = 10;
const incrementalFinish = numberOfCores + 10;

const performCalculations = async () => {

    const arrayOfWorkerPromises = [];
  
    for (let i = incrementalStart; i < incrementalFinish; i++ ) {

        const workerPromis = new Promise ((resolve, reject) => {
            const worker = new Worker(fileWorker, { workerData: i });
            worker.on('message', (n)=> resolve(n));
            worker.on('error', () => reject());
        });

        arrayOfWorkerPromises.push(workerPromis);
    }
    

    let arrayOfResults = await Promise.allSettled(arrayOfWorkerPromises);

    let result = arrayOfResults
        .map(({status,value}) => {
            if (status === 'fulfilled') {
                return { status: 'resolved', data: value }

            } else { return { status: 'error', data: null } }
        });
        
    console.log(result);
};

await performCalculations();