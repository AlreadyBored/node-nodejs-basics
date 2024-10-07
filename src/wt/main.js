import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { availableParallelism } from 'os';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { Worker } from 'worker_threads';

async function wt(data) {
	return new Promise((res, rej) => {
		const worker = new Worker(join(__dirname, 'worker.js'), {
			workerData: data
		});
		worker.on('message', msg => {
			res(msg);
		});
		worker.on('error', err => {
			rej(err)
		});
	});
}

const performCalculations = async () => {
	const workerPromises = []
	const cpu_cores = availableParallelism()
	const results = [];

	for (let i = 0; i < cpu_cores; i++) {
		const workerPromise = wt(i + 10);
		workerPromises.push(workerPromise);
	}

	try {
		const settledPromises = await Promise.allSettled(workerPromises);
		for (const promise of settledPromises) {
			const status = promise.status === "fulfilled" ? "resolved" : "error";
			const data = promise.status === "fulfilled" ? promise.value : null;
			results.push({ status, data });
		}
		console.log(results);
	} catch (error) {
		console.error(error);
	}

};

await performCalculations();
