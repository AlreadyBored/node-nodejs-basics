import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const numCores = cpus().length;  // Get number of logical CPU cores
    const workers = [];
    const results = [];

    const workerFilePath = path.join(__dirname, 'worker.js');  // Path to worker script

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(workerFilePath);  // Create a new worker thread
        workers.push(worker);

        const workerPromise = new Promise((resolve) => {
            worker.on('message', (message) => {
                resolve(message);  // Resolve the promise with the worker result
            });

            worker.on('error', () => {
                resolve({ status: 'error', data: null });
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    resolve({ status: 'error', data: null });
                }
            });

            worker.postMessage(10 + i);  // Send an incremental number starting from 10 to the worker
        });

        results.push(workerPromise);
    }

    const finalResults = await Promise.all(results);  // Wait for all workers to finish
    console.log(finalResults);  // Print the results
};

await performCalculations();
