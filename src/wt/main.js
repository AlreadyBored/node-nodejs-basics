import { Worker, isMainThread } from 'worker_threads';
import os from 'os';
import path from 'path';

const __dirname = import.meta.dirname;
const fileName = 'worker.js'

const performCalculations = async () => {
    if (isMainThread) {
        const numCPUs = os.cpus().length;
        const results = [];
    
        for (let i = 0; i < numCPUs; i++) {
            const worker = new Worker(path.join(__dirname, fileName));
    
            worker.on('message', (result) => {
                results.push(result);

                if (results.length === numCPUs) {
                    console.log(results);
                }
            });
    
            worker.postMessage(i + 10);
        }

    }
};

await performCalculations();
