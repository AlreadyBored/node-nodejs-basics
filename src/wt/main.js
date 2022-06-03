import { Worker } from 'worker_threads'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import os from 'os'

export const performCalculations = async () => {
    const path = dirname(fileURLToPath(import.meta.url)) + '/worker.js'
    const cpuCount = os.cpus().length
    const workersCount = new Array(cpuCount)
    let workersInst = []
    for (let i = 0; i < workersCount.length; i++) {
        workersInst.push(new Worker(path, { workerData: i + 10 }))
    }

    const workersPromise = workersInst.map((work) => {
        return new Promise((res) => {
            work.on('message', (e) => {
                res({
                    status: 'resolved',
                    data: e,
                })
            })
            work.on('error', (e) => {
                res({
                    status: 'error',
                })
            })
        })
    })

    const res = await Promise.all(workersPromise)

    return res
}
