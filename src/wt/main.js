import { Worker } from 'worker_threads';
import { cpus } from 'os';

const createWorker = (workerData) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
};

const performCalculations = async () => {
    try {
        const numOfCPU = cpus().length;
        const allFibs = [];
        let starter = 10;

        for (let i = 0; i < numOfCPU; i++) {
            const fib = await createWorker(starter++);
            allFibs.push({ status: 'resolved', data: fib });
        }

        // 0 1 2 3 4 5 6  7  8  9 10 11  12  13
        // 0 1 1 2 3 5 8 13 21 34 55 89 144 233
        Promise.all(allFibs).then((vals) => console.log(vals));
    } catch (err) {
        throw err;
    }
};

await performCalculations();
