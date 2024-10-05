import { Worker } from "worker_threads"
import { cpus } from "os"
import path from "path"
import { dirname } from "path"
import { fileURLToPath } from "url"

const fileName = fileURLToPath(import.meta.url)
const directoryName = dirname(fileName)

const performCalculations = async () => {
  // Write your code here
  const numberOfCores = cpus().length
  console.log(numberOfCores)
  const workers = []
  const results = new Array(numberOfCores)

  for (let i = 0; i < numberOfCores; i++) {
    workers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(path.join(directoryName, "worker.js"))
        worker.postMessage(10 + i)
        worker.on("message", (message) => {
          results[i] = message
          resolve()
        })
        worker.on("error", () => {
          results[i] = { status: "error", data: null }
          resolve()
        })
      })
    )
  }
  await Promise.all(workers)
  console.log(results)
}

await performCalculations()
