import os from 'os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
    const amountOfCores = os.cpus().length;

    let promises = [];
    for (let i = 0; i < amountOfCores; i++) {
        promises.push(
            new Promise((resolve, reject) => {
                const worker = new Worker('./src/wt/worker.js', {
                    workerData: 10 + i
                });
                worker.on('message', (data) => {
                    resolve({ status: 'resolved', data });
                });
                worker.on('error', () =>
                    resolve({ status: 'error', data: null })
                );
            })
        );
    }
    const result = await Promise.all(promises);
    console.log(result);
};

await performCalculations();
