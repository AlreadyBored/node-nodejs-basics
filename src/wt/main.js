import { cpus } from 'node:os'
import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { Worker } from 'node:worker_threads'

export const performCalculations = async () => {
  const workers = []
  const numOfCpus = cpus().length
  const filename = resolve(cwd(), 'src/wt', 'worker.js')

  for (let i = 0; i < numOfCpus; i++) {
    const workerData = {
      n: 10 + i,
    }

    workers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(filename, {
          workerData,
        })

        worker.on('message', resolve)
        worker.on('error', reject)
      })
    )
  }

  const result = await Promise.allSettled(workers)

  return result.map(({ status, value }) => {
    return {
      status: status === 'fulfilled' ? 'resolved' : 'error',
      data: value ? value : null,
    }
  })
}

console.log(await performCalculations())
