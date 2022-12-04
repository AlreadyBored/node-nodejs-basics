import { Worker } from 'worker_threads'
import { cpus } from 'os'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const dir = dirname(fileURLToPath(import.meta.url))

const performCalculations = async () => {
  const cp = cpus()

  let counter = 10

  const workersResult = await Promise.allSettled(
    cp.map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(`${dir}/worker.js`, {
          workerData: counter++
        })

        worker.on('message', msg => resolve(msg))
        worker.on('error', msg => reject(msg))
      })
    })
  )

  const result = workersResult.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: status === 'fulfilled' ? value : null
  }))

  console.log(result)

  return result
}

await performCalculations()
