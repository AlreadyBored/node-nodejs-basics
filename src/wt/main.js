import { Worker } from 'worker_threads';
import { cpus } from 'os';

const performCalculations = async () => {
    const path = './src/wt/worker.js';
    const workers = new Array(cpus().length).fill().map(
        (_, index) =>
            new Worker(path, { workerData: index + 10 })
    );

    const res = await Promise.allSettled(
        workers.map(
            (worker) =>
                new Promise((resolve, reject) => {
                    worker.on('message', (data) => resolve(data));
                    worker.on('error', (err) => reject(err));
                })
        )
    );

    console.log(
        res.map((e) => {
            return e.status === 'fulfilled'
                ? { status: 'resolved', data: e.value }
                : { status: 'error', data: null };
        })
    );

    // console.log(res);
};

await performCalculations();