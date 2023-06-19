import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
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
	const fib = 6;
	const result = await wt(fib);
	console.log(result);
};

await performCalculations();
