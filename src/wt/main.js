import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    
    const cpuThreads = os.cpus().length;
    let num = 10;
    let workers = [];

    for (let i = 0; i < cpuThreads; i++){
        num += 1;
        const worker = new Worker('./src/wt/worker.js', { workerData: num });
        workers.push(new Promise((resolve, reject) => {
            worker.on('message', (result) => {
                resolve({ status: 'resolved', data: result });
            });
            worker.on('error', (err) => {
                reject({ status: 'error', data: null });
            });
        }));
    }
    try {
        let results = await Promise.all(workers);
        console.log(results);
    } catch (error) {
        console.log(error);
    }
};

await performCalculations();