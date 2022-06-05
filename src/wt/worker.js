import { workerData, parentPort } from "worker_threads"

export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2)

export const sendResult = () => {
  const result = []

  for (let i = 0; i < workerData; i++) {
    const data = nthFibonacci(i + 10)
    const status = "resolved"

    result.push({ status, data })
  }

  if (result.length) {
    parentPort.postMessage(result)
  } else {
    parentPort.postMessage({ status: "error", data: null })
  }
}

sendResult()
