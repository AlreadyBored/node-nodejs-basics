import { cpus } from 'node:os'
import { Worker } from 'node:worker_threads'
import path from 'node:path';
import { fileURLToPath } from 'url';


const performCalculations = async () => {
    const numberOfWorkers = cpus().length
    const directory = path.dirname(fileURLToPath(import.meta.url))
    const workerFile = path.join(directory, 'worker.js')
    const promises = []
    for (let i = 0; i < numberOfWorkers; i++) {
        promises.push(new Promise((resolve, reject) => {
            const worker = new Worker(workerFile, { workerData: i + 10 })
            worker.on('message', (message) => {
                resolve({
                    status: 'resolved',
                    data: message
                });
            });

            worker.on('messageerror', () => {
                reject({
                    status: 'error',
                    data: null
                })
            })
        }))
    }
    let results = await Promise.allSettled(promises)
    const finalArr = results.map(el => el.value)
    console.log(finalArr)
};

await performCalculations();
