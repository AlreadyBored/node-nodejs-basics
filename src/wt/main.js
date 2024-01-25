import { Worker } from 'node:worker_threads';
import { join } from 'node:path';
import os from 'node:os';

const __dirname = import.meta.dirname;

const STARTED_INDEX = 10;
const WORKER_FILE = 'worker.js';

const performCalculations = async () => {
	const workers = Array(os.cpus().length)
		.fill(null)
		.map((value, index) => STARTED_INDEX + index)
		.map(workerData => new Worker(
			join(__dirname, WORKER_FILE),
			{ workerData },
		));

	const promises = workers.map(worker => new Promise(
		(res) => {
			worker.on('message', ({ msg, result }) => {
				if (msg === 'RESULT') {
					res(result);
				}
			});

			worker.on('error', () => res({
				data: null,
				status: 'error',
			}));
		},
	));

	const results = (await Promise.allSettled(promises))
		.map(({ value }) => value);

	console.log(results);
};

await performCalculations();
