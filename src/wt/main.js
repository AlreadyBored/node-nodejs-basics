import { cpus } from 'os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
    const workerPath = new URL('./worker.js', import.meta.url);

    const calculateNthFibonacci = (workerData) => new Promise((resolve) => {
        const worker = new Worker(workerPath, { workerData });
    
        worker.on('message', (data) => resolve({ status: 'resolve', data }));
        worker.on('error', () => resolve({ status: 'error', data: null }));
    });

    var resultArray = new Array(cpus().length).fill(null);
    resultArray = resultArray.map((value, index) => calculateNthFibonacci(index + 10));
    const data = await Promise.all(resultArray);

    console.log(data);
};

await performCalculations();