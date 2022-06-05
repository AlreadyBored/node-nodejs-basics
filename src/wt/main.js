import { Worker } from "worker_threads"
import { cpus } from "os"

export const performCalculations = async () => {
  const result = []

  for (let i = 0; i < cpus().length; i++) {
    result.push(
      new Promise((resolve, reject) => {
        const worker = new Worker("./src/wt/worker", {
          workerData: i + 10,
        })
        worker.on("message", (data) => resolve({ status: "resolved", data }))
        worker.on("error", () => resolve({ status: "error", data: null }))
      })
    )
  }

  Promise.all(result).then((value) => console.log(value))
}

performCalculations()
