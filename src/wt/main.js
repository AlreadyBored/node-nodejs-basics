import { Worker } from 'worker_threads';
import { cpus } from 'node:os';

const performCalculations = async () => {
    // Write your code here
    let number = 10;
    const workers = await Promise.allSettled(cpus().map(() => (
        new Promise((resolve, reject) => {
            const worker = new Worker('./worker.js', { workerData: number });
            number += 1;
            worker.on('message', res => resolve(res));
            worker.on('error', res => reject(res));
        })
    )));
    const result = workers.map(({ status, value }) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null,
    }));
    console.log(result);
};

await performCalculations();


/*
const worker = new Worker('worker.js', {
    workerData: 5
});

worker.on('message', msg => {
    console.log('index.js')
    console.log(msg);
}) */