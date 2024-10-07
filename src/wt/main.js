import os from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const cores = os.cpus();

    const workerReport = new Array(cores.length);

    let count = 0;
    const logResult = (status, result, id) => {
        count++;

        const log = {
            status,
            data: result
        }

        workerReport[id] = log;

        if (count === cores.length) {
            console.log("Worker's work done: ", workerReport);
        }
    }

    cores.forEach( (c, i) => {
        const worker = new Worker('./worker.js', {
            workerData: 10 + i,
        });

        worker.on('message', (result) => {
            logResult('resolved', result, i);
        });

        worker.on('error', () => {
            logResult('error', null, i);
        })
    });
};

await performCalculations();