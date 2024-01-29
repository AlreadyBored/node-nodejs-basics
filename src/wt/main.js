// main.js
import os from 'os';
import { Worker } from 'worker_threads';


const performCalculations = async () => {
    const numCores = os.cpus().length;
    let workers = [];
    let results = [];
    let startingValue = 10;

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(new URL('./worker.js', import.meta.url));
        workers.push(worker);
        worker.postMessage(startingValue + i);

        worker.on('message', (result) => {
            results.push(result);

            // Check if all workers have finished
            if (results.length === numCores) {
                console.log('All workers finished. Results:', results);
                workers.forEach(w => w.terminate()); // Terminate all workers
            }
        });

        worker.on('error', (err) => {
            results.push({ status: 'error', data: null });
            console.error('Worker error:', err);
        });

        worker.on('exit', (code) => {
            if (code !== 0) {
                console.error(`Worker stopped with exit code ${code}`);
            }
        });
    }
};

await performCalculations();