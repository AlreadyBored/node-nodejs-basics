import { Worker } from 'worker_threads';
import os from 'os';

export const performCalculations = async () => {
    const CPUcount = os.cpus().length;
    let res = [];

    for (let i = 10; i < 10 + CPUcount; i++) {
        res.push(await runService(i));
    }

    console.log(res);
};

function runService(workerData) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        })

        // reject(() => new Error('Error'));
    })
}

performCalculations();