import { cpus } from 'os';
import { Worker } from 'worker_threads';
import path from 'node:path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerPath = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    const procesorNumbers = cpus().length; 
    const resultsPromises = [];

    for (let i = 0; i < procesorNumbers; i++) {
        resultsPromises.push(new Promise((resolve) => {
            const worker = new Worker(workerPath, { workerData: i + 10})
    
            worker.on('message', (data) => resolve({status: 'resolved', data: data }));
            worker.on('error', () => resolve({status: 'error', data: null }));

        }))
    }

    const results = await Promise.all(resultsPromises);
    console.log(results)
};

await performCalculations();