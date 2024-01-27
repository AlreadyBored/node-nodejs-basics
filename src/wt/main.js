import { Worker } from 'worker_threads'
import { cpus } from 'os'

const createWorker = (index) =>
    new Promise((res) => {
        const worker = new Worker('./worker.js')
        worker.postMessage(10 + index)
        worker.on('message', (data) => {
            res({
                status: 'resolved',
                data
            })
        })
        worker.on('error', () => {
            res({
                status: 'error',
                data: null
            })
        })
    })

const performCalculations = async () => {
    const workers = cpus().map((_, index) => createWorker(index))
    const result = await Promise.all(workers)

    console.log(result)
    process.exit()
};

await performCalculations();