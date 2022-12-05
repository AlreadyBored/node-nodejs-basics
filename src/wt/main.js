import { cpus } from 'os'
import { Worker } from 'worker_threads'
import { getCombinedPath } from '../pathHelper.js'

const performCalculations = async () => {
    const pathToFile = getCombinedPath(import.meta.url, 'worker.js')
    let startNumber = 10

    const workersResults = await Promise.allSettled(cpus().map(() => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(pathToFile, {
                workerData: startNumber++
            })

            worker.on('message', resolve)
            worker.on('error', reject)
        })
    }))

    const results = workersResults.map(({ status, value }) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null
    }))
    console.log(results)
};

await performCalculations();