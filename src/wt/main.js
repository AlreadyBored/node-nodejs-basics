import { Worker } from 'node:worker_threads';
import {cpus} from 'node:os';

const performCalculations = async () => {
    const path = './src/wt/worker.js';
    const cpuCores = cpus();
    const res = [];
    const startStreams = 10;
    const promise = [];

    cpuCores.forEach((elem, index) => {
        promise.push(new Promise((resolve, reject) => {
                const worker = new Worker(path, {
                    workerData: index + startStreams,
                });
                worker.on('message', resolve);
                worker.on('error', reject);
                worker.on('exit', (code) => {
                    if (code !== 0)
                        reject(new Error(`Worker stopped with exit code ${code}`));
                });
            }).then(result => {
            res[index] = {
                    status: 'resolved',
                    data: result
                }
            }).catch(() => {
            res[index] = {
                    status: 'error',
                    data: null
                }
            })
        )
    })

    await Promise.all(promise).then(()=>{
        console.log(res)
    });
};

await performCalculations();