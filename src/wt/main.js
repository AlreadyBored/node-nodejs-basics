import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
    const numberOfWorkerThreads = cpus().length;
    const workerPromises = [];
    let fibanacciBaseNumber = 10;

    for (let i = 0; i < numberOfWorkerThreads; i++) {
        const workerPromise = new Promise((resolve) => {
            const worker = new Worker('./worker.js', {
                workerData: {
                    number: fibanacciBaseNumber
                },
            });

            worker.on('message', (result) => {
                resolve({ status: 'resolved', data: result });
            });

            worker.on('error', (error) => {
                resolve({ status: 'error', data: null });
            });

            worker.on('exit', (code) => {
                if (code !== 0) {
                    resolve({ status: 'error', data: null });
                }
            })
        });

        workerPromises.push(workerPromise);

        fibanacciBaseNumber++;
    }

    const output = await Promise.all(workerPromises);

    console.log(output);
};

await performCalculations();