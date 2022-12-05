import * as os  from 'os'
import { Worker } from 'worker_threads'
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const performCalculations = async () => {
	let cp = os.cpus()
	let num = 10


	const workers = cp.map(() => {
		return new Promise((resolve, reject) => {
			const worker = new Worker(`${__dirname}/worker.js`, {
				workerData: num++
			})

			worker.on('message', (msg) => resolve(msg))
			worker.on('error', msg => reject(msg))
		})

	})

	let result = await Promise.all(workers)
	console.log(result)
	return result

	// return Promise.all(workers).then(data => console.log(data))
};

await performCalculations();