import { Worker, isMainThread } from 'worker_threads';
import { cpus } from 'os';import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { access } from "fs/promises";
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const exists = async(path) => {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

export const performCalculations = async () => {
  const path = join(__dirname, 'worker.js')
  const isFileExists = await exists(path)
  if (!isFileExists) throw new Error('File "worker.js"  not exists')
  const START_WITH = 10

  const numCPUs = cpus().length

  if (isMainThread) {
    const result = []
    for (let i = 0; i < numCPUs; i++) {
      const n = START_WITH + i
      const runWorker = new Promise((resolve, reject) => {
        const worker = new Worker(path, {workerData: n})
        worker.on('message',resolve)
        worker.on('error', reject)
      })

      let data
      try {
        data = await runWorker
      } catch {
        data = null
      }
      const status = data ? 'resolved' : 'error'
      result.push({status, data})
    }
    return result
  }
};

// test
console.clear()
console.log(await performCalculations())