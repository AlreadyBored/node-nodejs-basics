import { Worker } from 'worker_threads';
import os from 'os';
const performCalculations = async () => {
    const cores = os.cpus().length;
    const currentWorkers = [];
    for (let i = 0; i < cores; i++) {
        const messageToProcess = 10 + i;
        currentWorkers.push(
            new Promise((resolve) => {
                const worker = new Worker('./worker.js', { workerData: messageToProcess });
                worker.on('message', (data) => {
                    resolve({ status: 'resolved', data });
                });
                worker.on('error', () => {
                    resolve({ status: 'error', data: null });
                });
                worker.on('exit', (code) => {
                    if (code !== 0) {
                        resolve({ status: 'error', data: null });
                    }
                });
            })
        );
    }
    const getFinalResult = await Promise.all(currentWorkers);
    console.log(getFinalResult);
};

await performCalculations();
