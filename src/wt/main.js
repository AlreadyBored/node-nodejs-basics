import { Worker } from 'worker_threads';
import { cpus } from 'os';


export const performCalculations = async () => {
    const numberTreads = cpus().length;
    const startNumber = 10;
    const worker = new Worker('./worker.js');

    worker.postMessage(startNumber);
    worker.on('message', msg => {
        console.log(msg);
    })
};

performCalculations();
