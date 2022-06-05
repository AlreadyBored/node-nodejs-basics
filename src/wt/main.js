import os from 'os';
import { Worker } from 'worker_threads';

export const performCalculations = async () => {
    const baseData = 10;
    const cpuCores = os.cpus();

    const workers = cpuCores.map((core, index) => (
        new Promise((resolve, reject) => {
            const worker = new Worker(
                './src/wt/worker.js',
                { workerData: Number(baseData + index)
            });

            worker.on('message', resolve);

            worker.on('error', reject);

            worker.on('exit', (code) => {
                if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
            });
        })
    ))

    Promise.allSettled(workers).then((values) => {
        const results = values.map((value) => {
            return value.status === 'fulfilled'
            ? { status: 'resolved', data: value.value}
            : { status: 'error', data: null}
        })
        console.log(results);
    })
};

performCalculations()