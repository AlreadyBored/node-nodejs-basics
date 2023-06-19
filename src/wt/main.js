import os from 'os'
import { Worker } from 'worker_threads';

const createWorker = (n) => {
    return new Promise((resolve, reject) => {
        const workerPath = new URL('worker.js', import.meta.url)
        const worker = new Worker(workerPath, {
            workerData: { n },
        });
        worker.on("message", (data) => {
            resolve({ status: 'resolved', data });
        });
        worker.on("error", (msg) => {
            reject({ status: 'error', data: null });
        });
    });
}

const performCalculations = async () => {
    const cores = os.cpus().length
    const workers = [];

    for (let i = 0; i < cores; i++) {
        const n = i + 10
        workers.push(createWorker(n));
    }

    const results = await Promise.allSettled(workers).then(r => r.map(i => i.value || i.reason));
    console.log(results)
};

await performCalculations();