import * as workerJS from 'worker_threads'
import * as os from 'os'

export const performCalculations = async () => {
    const cpudLength = os.cpus().length
    const arr = []

    for (let i = 1; i <= cpudLength; i++) {
        arr.push(
            new Promise((resolve, rej) => {
                new workerJS.Worker('./src/wt/worker.js', {
                    workerData: 10 + i
                }).on('message', msg => {
                    resolve(msg)
                })
            })
        )
    }
    const res = await Promise.all(arr)
    return res
};

console.log(await performCalculations())