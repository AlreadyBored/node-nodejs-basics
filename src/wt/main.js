import { availableParallelism } from 'os';
import { Worker } from 'node:worker_threads';
import { getNecessaryPathInCurrentDir } from '../utils/helpers/path.helper.js';

// I suppose better use promise look
// form 46 minutes https://www.youtube.com/watch?v=Qe890s646zE&ab_channel=RSSchoolinEnglish

// Promise.allSettled()
const path = getNecessaryPathInCurrentDir(import.meta.url, '/worker.js');
const count = 5;

// const numCores = os.cpus().length;
const numCores = availableParallelism();

const performCalculations = async () => {
    console.log('os.cpus(): ' + numCores);

    const worker = new Worker(path, { workerData: count });

    worker.on('message', result => {
        console.log(`Calculated Fibonacci of ${count}: ${result.data}`);
        console.log();
    });
};

await performCalculations();

// second part

const createWorkerThreads = async () => {
    const results = Array(numCores);
    let completedWorkers = 0;

    const handleWorkerMessage = (index, message) => {
        results[index] = message;
        completedWorkers++;

        if (completedWorkers === numCores) {
            console.log(results);
        }
    };

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(path, {
            workerData: 10 + i,
        });

        worker.on('message', (message) => {
            handleWorkerMessage(i, message);
        });
    }
};

await createWorkerThreads();
