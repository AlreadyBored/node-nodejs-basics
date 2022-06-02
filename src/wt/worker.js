import { resolve } from 'node:path'
import { cwd } from 'node:process'
import {
  isMainThread,
  parentPort,
  Worker,
  workerData,
} from 'node:worker_threads'

export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2)

export const sendResult = (props) => {
  const result = nthFibonacci(props.n)
  parentPort.postMessage(result)
}

if (isMainThread) {
  const filename = resolve(cwd(), 'src/wt', 'worker.js')
  const worker = new Worker(filename, {
    workerData: { n: 6 },
  })

  worker.on('message', (msg) => {
    console.log(msg)
  })
} else {
  sendResult(workerData)
}
