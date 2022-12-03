import {cpus} from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
    const count_cp = cpus()
    let promises = [];
    let result = [];

    count_cp.forEach((item, index) => {
        promises.push(
            new Promise((resolve, reject) => {
                const worker = new Worker('./worker.js', {
                    workerData: index + 10,
                });
                worker.on('message', resolve);
                worker.on('error', reject);
                worker.on('exit', (code) => {
                    if (code !== 0)
                        reject(new Error(`Worker stopped with exit code ${code}`));
                });
            }).then(val => {
                result[index] = {
                    status: 'resolved',
                    data: val
                }
            }).catch(() => {
                result[index] = {
                    status: 'error',
                    data: null
                }
            })
        )
    })

    await Promise.all(promises).then(()=>{
        console.log(result)
    });


};

await performCalculations();