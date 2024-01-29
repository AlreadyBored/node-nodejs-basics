import os from 'os';
import { Worker } from 'worker_threads';

const getNumberOfCores = () => os.cpus().length || 1;

const createWorker = (workerScript) => new Worker(workerScript);

const performCalculations = async () => {
    const numberOfCores = getNumberOfCores();
    const workers = Array.from({ length: numberOfCores }, (_, index) => createWorker('./src/wt/worker.js'));

    const results = await Promise.all(workers.map((worker, index) => new Promise((resolve) => {
        const n = 10 + index * 2;
        worker.on('message', (result) => resolve(result));
        worker.postMessage(n);
    })));

    console.log(results);
};

performCalculations();
