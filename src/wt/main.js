import { Worker } from "worker_threads"
import { cpus } from "os"

export const performCalculations = async () => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./src/wt/worker.js", {
      workerData: cpus().length,
    })

    worker.on("message", (msg) => console.log(msg))
  })
}

performCalculations()
