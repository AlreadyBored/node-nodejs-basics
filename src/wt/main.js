import {cpus} from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from "node:worker_threads";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerFilePath = path.join(__dirname, 'worker.js');
const FIBONACCI_START_NUMBER = 10;

const createWorker = (index) => {
    return new Worker(workerFilePath, {
        workerData: FIBONACCI_START_NUMBER + index
    })
};

const createTask = (index) => {
    return new Promise((resolve, reject) => {
        const worker = createWorker(index);

        worker.on('message', resolve)

        worker.on('error', reject)
    })
}

const normalizeResponse = (res) => res.status === 'fulfilled'
    ?  { status: 'resolved', data: res.value }
    :  { status: 'error', data: null }

const performCalculations = async () => {
    const workerList = Array(cpus().length).fill(0).map((_i, index) => createTask(index));
    const result = (await Promise.allSettled(workerList)).map(normalizeResponse);

    console.log(result);
};




await performCalculations();
