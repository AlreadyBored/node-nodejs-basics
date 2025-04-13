import { Worker } from 'worker_threads';
import path from 'node:path';
import { cpus } from 'os';

const performCalculations = async () => {
    const filePath = path.resolve('src/wt/worker.js');
    const coresNum = cpus().length;
    const workers = [];

    for (let i = 0; i < coresNum; i++) {
        const num = 10 + i;
        const workerThreads = new Promise((resolve) => {
            const worker = new Worker(filePath, {workerData: num});
        
            worker.on('message', (data) => {
                resolve({status: 'resolved', data});
            });
            worker.on('error', () => {
                resolve({status: 'error', data: null});
            });
            worker.on('exit', (code) => {
                if (code !== 0) {
                    resolve({status: 'error', data: null});
                }
            });
        });
        
        workers.push(workerThreads);
    }
    const result = await Promise.all(workers);
    console.log(result);
};

await performCalculations();
