export const performCalculations = async () => {
  //--------------------------preparing-----------------
  import { fileURLToPath } from "url";
  import { dirname, join } from "path";
  import { access } from "fs/promises";

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const path = join(__dirname, 'worker.js')

  const isFileExists = await exists(path)
  if (!isFileExists) throw new Error('File not exists')

  async function exists(path) {
    try {
      await access(path)
      return true
    } catch {
      return false
    }
  }
  console.clear()

//--------------------------solution-----------------
  import { Worker, isMainThread } from 'worker_threads';
  import { cpus } from 'os';
  const numCPUs = cpus().length

  if (isMainThread) {
    const result = []
    for (let i = 0; i < numCPUs; i++) {
      const n = 10 + i
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

    console.log(result)
  }
};