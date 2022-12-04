import os from "os"
import { Worker } from "worker_threads"

const performCalculations = async () => {
  // Write your code here
  const cores = os.cpus().length
  const minNumber = 10
  const workerPath = "./src/wt/worker.js"

  const promises = Array(cores)
    .fill()
    .map(
      (_, i) =>
        new Promise((resolve, reject) => {
          const worker = new Worker(workerPath, {
            workerData: { n: minNumber + i },
          })
          const resObj = data => ({
            status: data ? "resolved" : "error",
            data: data ?? null,
          })
          worker.on("message", data => resolve(resObj(data)))
          worker.on("error", () => reject(resObj()))
        })
    )

  const results = await Promise.all(promises)
  console.log(results)
}

await performCalculations()
