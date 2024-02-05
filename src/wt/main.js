// implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file worker.js and able to send data to those threads and to receive result of the computation from them. You should send incremental number starting from 10 to each worker. For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker, 13 to fourth worker. After all workers will finish, function should log array of results into console. The results are array of objects with 2 properties:
// status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
// data - value from worker in case of success or null in case of error in worker
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker, isMainThread } from 'node:worker_threads'
import { availableParallelism } from 'node:os'
const performCalculations = async () => {
    // Number of availiable CPU's cores
    const NUMBER_OF_CPU_CORES = availableParallelism()
    const workers = []
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
    const pathToWorker = path.resolve(__dirname, 'worker.js')
    // Creates worker with passed workerData
    const createWorker = (workerData) => new Promise((resolve) => {
        const worker = new Worker(pathToWorker, { workerData })
        worker.on('message', (data) => resolve({ status: 'resolved', data}))
        worker.on('error', () => resolve({ status: 'error', data: null}))
    })

    for (let i = 0; i < NUMBER_OF_CPU_CORES; i += 1) {
        workers.push(createWorker(i + 10))
    }

    const results = await Promise.all(workers)

    console.log(results)
    
};

await performCalculations();