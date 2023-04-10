import { Worker } from 'worker_threads';
import { cpus } from 'os';

const createWorker = (workerData) => {
    return new Promise((resolve, reject) => {
        // Create worker
        const worker = new Worker('./worker.js', { workerData });

        // Listen 'postMessage' from worker
        worker.on('message', resolve);

        // Listen errors
        worker.on('error', reject);

        // If child process doesn't exit successfully, throw exit code
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
};

const performCalculations = async () => {
    try {
        // Get number of CPU cores from executing machine
        const numOfCPU = cpus().length;

        // Collecting fibonacci numbers for each cores
        const allFibs = [];

        // Starter value for calculation fibonacci number for first CPU core
        let starter = 10;

        // Give values to CPU core and collect fibonacci numbers from them
        for (let i = 0; i < numOfCPU; i++) {
            const fib = await createWorker(starter++);
            allFibs.push({ status: 'resolved', data: fib });
        }

        // Print fibonacci numbers
        Promise.all(allFibs).then((fibNum) => console.log(fibNum));
    } catch (err) {
        throw err;
    }
};

await performCalculations();
