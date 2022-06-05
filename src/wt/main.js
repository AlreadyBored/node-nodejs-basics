import wt from 'worker_threads'
import os from 'os'

const baseNumber = 10

export const performCalculations = async () => {
    const promisedWorkers = Array.from({ length: os.cpus().length }, (_, i) => new wt.Worker('./worker.js', { workerData: baseNumber + i }))
        .map(worker => new Promise(res => {
            worker.on('error', _ => res({ status: 'error', data: null }))
            worker.on('message', data => res({ status: 'resolved', data: data }))
        }))
    return (await Promise.allSettled(promisedWorkers).then(res => res))
        .map(r => r.value)
}
