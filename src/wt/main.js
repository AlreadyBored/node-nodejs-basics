import { Worker } from 'node:worker_threads';
import { join } from 'node:path';
import os from 'node:os';

const __dirname = import.meta.dirname;
const STARTED_INDEX = 10;
const WORKER_FILE = 'worker.js';

const performCalculations = async () => {
	const numberCPUs = os.cpus().length;
	const data = Array(numberCPUs).fill(null).map((value, index) => STARTED_INDEX + index);

	const workers = data.map(workerData => new Worker(
		join(__dirname, WORKER_FILE),
		{ workerData }
	));

	const resultPromises = workers.map(worker => new Promise((res) => {
		worker.on('message', ({ msg, result }) => {
			if (msg === 'RESULT') {
				res(result);
			}
		});
		worker.on('error', () => {
			res({ data: null, status: 'error' });
		})
	}));

	const result = (await Promise.allSettled(resultPromises))
		.map(({ value }) => value);
	console.log(result);
};

await performCalculations();
