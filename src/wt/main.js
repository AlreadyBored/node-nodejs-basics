import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import {cpus} from 'os';
import {Worker} from 'node:worker_threads';

const performCalculations = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const workerPath = join(__dirname, 'worker.js');
    const numberOfCpuCores = cpus().length;
    const shiftNumberForFibonacciCalc = 10;
    const results = new Array(numberOfCpuCores);

    const createWorker = (index) => {
        return new Promise((resolve) => {
            const worker = new Worker(workerPath);
            worker.postMessage(index + shiftNumberForFibonacciCalc);
            worker.on('message', (message) => {
                results[index] = {status: 'resolved', message};
                worker.terminate();
                resolve();
            });
            worker.on('error', () => {
                results[index] = {status: 'error', data: null};
                worker.terminate();
                resolve();
            });
        });
    }

    const workers = [];
    for (let i = 0; i < numberOfCpuCores; i++) {
        workers.push(createWorker(i));
    }

    await Promise.all(workers);
    console.log(results);
};

await performCalculations();