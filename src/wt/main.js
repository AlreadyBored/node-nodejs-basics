import { Worker, isMainThread, parentPort, workerData } from 'workerthreads';
import os from 'os';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const result = nthFibonacci(workerData);
    parentPort.postMessage({ status: 'resolved', data: result });
};

if (!isMainThread) {
    sendResult();
}

const performCalculations = async () => {
    const numCPUs = os.cpus().length; 
    const workers = [];
    const results = [];

    for (let i = 0; i < numCPUs; i++) {
        workers.push(new Worker(__filename, { workerData: 10 + i })); 
    }

    for (let worker of workers) {
        worker.on('message', (result) => {
            results.push(result);
        });

        worker.on('error', (error) => {
            results.push({ status: 'error', data: null });
        });

        worker.on('exit', (code) => {
            if (code !== 0) {
                results.push({ status: 'error', data: null });
            }
        });
    }

    await Promise.all(workers.map(worker => new Promise(resolve => {
        worker.on('exit', resolve);
    })));

    console.log(results); 
};

if (isMainThread) {
    performCalculations();
}
