import { Worker, isMainThread } from 'worker_threads';
import os from 'os';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
    const numCPUs = os.cpus().length;
    const results = new Array(numCPUs);
    const workers = [];
    let completedWorkers = 0;

    return new Promise((resolve) => {
        for (let i = 0; i < numCPUs; i++) {
            const n = 10 + i;
            const fileName = fileURLToPath(import.meta.url.replace(/main\.js$/, 'worker.js'));

            const worker = new Worker(fileName, { workerData: n });

            workers.push(worker);

            worker.on('message', (result) => {
                results[i] = { status: 'resolved', data: result };
                completedWorkers++;

                if (completedWorkers === numCPUs) {
                    resolve(results);
                }
            });

            worker.on('error', (error) => {
                results[i] = { status: 'error', data: null };
                completedWorkers++;

                if (completedWorkers === numCPUs) {
                    resolve(results);
                }
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    console.error(`Worker stopped with exit code ${code}`);
                }
            });
        }
    });
};

if (isMainThread) {
    performCalculations().then((results) => {
        console.log('Results:', results);
    });
}

//await performCalculations();