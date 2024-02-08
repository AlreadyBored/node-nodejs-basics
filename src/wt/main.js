import { availableParallelism } from 'os'
import path from 'path'
import { Worker } from 'worker_threads'
import { getFilePath } from '../tools/filepath.js'

const { __dirname } = getFilePath(import.meta.url)
const workerFilePath = path.join(__dirname, 'worker.js')

const performCalculations = async () => {
	const numOfCores = availableParallelism()
	const workers = []

	const createWorkers = (data) => {
		return new Promise((resolve) => {
			const worker = new Worker(workerFilePath, { workerData: data })

			worker.on('message', (data) => resolve({ status: 'resolved', data }))
			worker.on('error', () => resolve({ status: 'error', data: null }))
		})
	}
	for (let i = 0; i < numOfCores; i++) {
		workers.push(createWorkers(i + 10))
	}
	console.log(workers)
	const workerResults = await Promise.all(workers)
	console.log(workerResults)
}

await performCalculations()
