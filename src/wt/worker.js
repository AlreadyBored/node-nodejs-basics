import { parentPort, workerData } from 'node:worker_threads'

export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2)

export const sendResult = () => {
  const { n } = workerData
  const result = nthFibonacci(n)
  parentPort.postMessage(result)
}

sendResult()
