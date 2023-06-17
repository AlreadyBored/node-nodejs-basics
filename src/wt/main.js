import { Worker } from 'worker_threads';
import { getDirPath } from '../fs/utils.js';
import { resolve } from 'path';
import { cpus } from 'os';


const WORKER_FILE_NAME = 'worker.js';
const NTH_FIBONACCI_START_NUMBER = 10;

const dirPath = getDirPath(import.meta.url);
const workerPath = resolve(dirPath, WORKER_FILE_NAME);

const numOfCors = cpus().length;

const performCalculations = async () => {
    const computations = new Array(numOfCors).fill({ });
    let endedWorkersCount = 0;

    computations.forEach((_, index) => {
        const worker = new Worker(workerPath, { workerData: NTH_FIBONACCI_START_NUMBER + index });
        worker.on('message', (data) => {
            computations[index] = ({ status: 'resolved', data });
        });
        worker.on('error', () => {
            computations[index] = ({ status: 'error', data: null });
        });
        worker.on('exit', () => {
            endedWorkersCount++;

            if (endedWorkersCount === numOfCors) console.log(computations);
        });
    });
};

await performCalculations();
