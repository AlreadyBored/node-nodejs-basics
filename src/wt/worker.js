import { parentPort, workerData } from 'node:worker_threads'

const nthFibonacci = (n) =>
    n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2)

const sendResult = () => {
    if (Math.random() > 0.5) {
        throw new Error('')
    }
    parentPort.postMessage(nthFibonacci(workerData))
}

sendResult()
