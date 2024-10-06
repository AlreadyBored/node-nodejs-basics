import { availableParallelism } from 'os'
import { Worker } from 'worker_threads'

const runWorker = (workerData) => {
    return new Promise((res, rej) => {
        const worker = new Worker('./worker.js', { workerData })
        worker.on('message', (value) => {
            res({
                status: 'resolve',
                data: value
            })
        })
        worker.on('error', (err) => rej({
            status: err,
            data: null
        }))
    })
}

const performCalculations = async () => {
    try {
        const countCpuCore = availableParallelism()
        const treads = []
    
        for(let i = 0; i < countCpuCore; i++ ) {
            treads.push(runWorker({treadId: i, fib: i+10}))
        }
    
        const results = await Promise.all(treads)
        console.log('performCalculations', results)
    } catch(err) {
        throw new Error(err)
    }
};

await performCalculations();