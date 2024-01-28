import { workerData, parentPort } from 'node:worker_threads'

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2)

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  // if (Math.random() > 0.5) {
  //   throw Error('ops')
  // }
  parentPort.postMessage(nthFibonacci(workerData))
}

sendResult()
