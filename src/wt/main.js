import { Worker, isMainThread, parentPort, workerData } from 'worker_threads'
import { getDirname } from '../dirname.js'
import { join } from 'path'
import {cpus} from 'os'

const __dirname = getDirname(import.meta.url)

const workerScriptPath = join(__dirname, 'worker.js')

const createWorker = (data) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerScriptPath, { workerData: data })

        worker.on('message', (result) => {
            resolve({ status: 'resolved', data: result })
        })

        worker.on('error', (error) => {
            resolve({ status: 'error', data: null })
        })

        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`))
            }
        })
    })
}

const performCalculations = async () => {
    if (isMainThread) {
        const logicalCores = cpus().length

        const workerPromises = []
        for (let i = 0; i < logicalCores; i++) {
            const dataToSend = 10 + i; 
            const promise = createWorker(dataToSend)
            workerPromises.push(promise)
        }

        const results = await Promise.all(workerPromises)
        console.log('Results:', results)
    }
}

await performCalculations();
