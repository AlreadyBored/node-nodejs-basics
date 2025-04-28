import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { URL } from 'url';

const performCalculations = async () => {
    // Write your code here
    
    const numCores = cpus().length;
    const workers = [];
    const results = [];

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(new URL('./worker.js', import.meta.url));

        const promise = new Promise((resolve) => {
            worker.once('message', (result) => {
                
                results.push({ status: 'resolved', data: result });
                resolve();

            });
            worker.once('error', (error) => {
                
                results.push({ status: 'error', data: null });
                resolve();
            });
        });

        worker.postMessage(10 + i); 
        workers.push(promise);
    }

   
    await Promise.all(workers);

    
    console.log(results);
};

await performCalculations();
