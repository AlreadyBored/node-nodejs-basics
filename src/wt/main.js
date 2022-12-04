import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { cpus } from 'os';
import path, { dirname } from 'path';

const __filename = fileURLToPath(new URL(import.meta.url));
const __dirname = dirname(__filename);
const srcPath = path.resolve(__dirname, 'worker.js');


const performCalculations = async () => {
    const workers = new Array(cpus().length).fill().map((el, index) => 
        new Worker(srcPath, { workerData: index + 10 }));
    console.log(workers)
    
    const promises = workers.map((worker) => {
        return new Promise((res, rej) => {
            worker.on('message', (data) => {
                res({ status: 'resolved', data })
            });

            worker.on('error', () => {
                rej({ status: 'error', data: null })
            });
        })
    }
        )

    const responses = await Promise.allSettled(promises);

    console.log(responses);
};

await performCalculations();