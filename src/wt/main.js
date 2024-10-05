import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Worker } from 'node:worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const workerPath = join(__dirname, 'worker.js');

    const numberCPUs = cpus().length;
    const workers = [];
    const results = Array(numberCPUs).fill(null);

    const checkAllWorkers = () => {
        if (results.filter(Boolean).length === numberCPUs) {
            console.log(results);
            workers.forEach((worker) => worker.terminate());
        }

    };

    for (let i = 0; i < numberCPUs; i++) {
        const worker = new Worker(workerPath);

        worker.on('message', (message) => {
            results[i] = message;
            checkAllWorkers();
        });

        worker.on('error', () => {
            results[i] = { status: 'error', data: null };
            checkAllWorkers();
        });

        workers.push(worker);
        worker.postMessage(10 + i);
    }

};

await performCalculations();