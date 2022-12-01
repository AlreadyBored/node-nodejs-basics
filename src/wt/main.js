import { Worker } from 'node:worker_threads'
import { cpus } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const performCalculations = async () => {
    const results = []
    const workerFile = join(
        dirname(fileURLToPath(import.meta.url)),
        'worker.js'
    )
    for (let i = 0; i < cpus().length; i++) {
        const worker = new Worker(workerFile, { workerData: i + 10 })
        results.push(
            new Promise((resolve) => {
                worker.on('message', (answer) => {
                    resolve({ status: 'resolved', data: answer })
                })
                worker.on('error', () => {
                    resolve({ status: 'error', data: null })
                })
            })
        )
    }
    console.table(await Promise.all(results))
}

await performCalculations()
