import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    // Write your code here

    const workerPath = new URL('./worker.js', import.meta.url);

    const cpuCount = os.cpus().length;
    const startCount = 10;

    const threads = new Set();

    for (let i = startCount; i < cpuCount + startCount; i++) {
        const workerPromise = new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, { workerData: i });

            worker.on('error', () => reject());
            worker.on('message', (msg) => resolve(msg));
        })

        threads.add(workerPromise);
    }

    const res = await Promise.allSettled(threads);
    const calcData = res.map(({ status, value}) => (
        status === 'fulfilled' ? {
            data: value,
            status: 'resolved',
        } : {
            data: null,
            status: 'error',
        })
    );

    console.log(calcData);

};

await performCalculations();