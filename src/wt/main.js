import os from 'os';
import { Worker, isMainThread } from 'worker_threads';
import { dirname, join } from 'path';

const __dirname = dirname(new URL(import.meta.url).pathname);
const filePath = join(__dirname, 'worker.js');

const performCalculations = async () => {
    const NUM_CPUS = os.cpus().length;

    const createWorkers = () => {
        const workers = [];
        for (let i = 0; i < NUM_CPUS; i++) {
            const worker = new Worker(filePath);
            workers.push(worker);
        }
        return workers;
    };

    const sendIncrementalNumbers = (workers) => {
        workers.forEach((worker, index) => {
            const data = 10 + index;
            worker.postMessage({ data });
        });
    };

    const collectResults = (workers) => {
        const results = [];
        let completedWorkers = 0;

        workers.forEach((worker, index) => {
            worker.on('message', (message) => {
                results[index] = message;
                completedWorkers++;
                if (completedWorkers === workers.length) {
                    console.log('Results:', results);
                }
            });

            worker.on('error', (error) => {
                results[index] = { status: 'error', data: null };
                completedWorkers++;
                if (completedWorkers === workers.length) {
                    console.log('Results:', results);
                }
            });
        });
    };

    if (isMainThread) {
        const workers = createWorkers();
        sendIncrementalNumbers(workers);
        collectResults(workers);
    }
};

await performCalculations();
