import { Worker } from 'worker_threads';
import { cpus } from 'os';

const N = 10;

const performCalculations = async () => {
    const workerPromiseList = cpus().map((_, i) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker('./worker.js', {
                workerData: { n: (N + i) }
            });
            worker.on('message', resolve);
            worker.on('error', reject);

        })
    })
    const results = await Promise.allSettled(workerPromiseList);
    console.log(results);
};

await performCalculations();