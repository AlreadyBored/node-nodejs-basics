import { cpus } from 'os'
import { Worker } from 'worker_threads'

export const performCalculations = async () => {
    const WORKER_PATH = './worker.js'
    const workerUrl = new URL(WORKER_PATH, import.meta.url)

    const calculateNthFibonacci = (workerData) =>
        new Promise((resolve) => {
            const worker = new Worker(workerUrl, { workerData })

            worker.on('message', (data) => {
                resolve({ status: 'resolved', data })
            })
            worker.on('error', (data) => {
                resolve({ status: 'error', data })
            })
        })

    const lengthOfArray = []

    for (let i = 0; i < cpus().length; i++) {
        lengthOfArray.push(i)
    }

    const calculation = lengthOfArray.map((_, index) =>
        calculateNthFibonacci(index + 10)
    )

    const data = await Promise.all(calculation)

    console.log(data)
}

performCalculations()
