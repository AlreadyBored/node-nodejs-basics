import { Worker } from 'worker_threads'
import { cpus } from "os";

export const performCalculations = async () => {
    const promises = []

    for (let i = 10; i < cpus().length + 10; i++) {
        const worker = new Worker('./src/wt/worker.js', {
            workerData: i
        })

        promises.push(
            new Promise((resolve, reject) => {
                worker.on('message', msg => {
                    resolve(msg)
                })

                worker.on('error', msg => {
                    reject(msg)
                })
            })
        )
    }

    let result = await Promise.allSettled(promises)
    return result.map(({status, value}) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: value
    }))
};

console.log(await performCalculations())