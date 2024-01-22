// import { cpus } from 'os';
import { availableParallelism } from 'os'; // returns an estimate of the default amount of parallelism a program should use
import { Worker } from 'worker_threads';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const START_NUMBER = 10;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const workerScript = join(__dirname, 'worker.js');

const fibonacciWorkerService = (number) =>
	new Promise((resolve) => {
		const worker = new Worker(workerScript, { workerData: number });

		worker.on('message', (data) =>
			resolve({
				status: 'resolved',
				data,
			})
		);

		worker.on('error', (data) =>
			resolve({
				status: 'error',
				data: null,
			})
		);
	});

const performCalculations = async () => {
	const workersPool = Array.from(
		// { length: cpus().length},
		{ length: availableParallelism() },
		(_, i) => fibonacciWorkerService(START_NUMBER + i)
	);
	const result = await Promise.all(workersPool);
	console.log('The calculation due to worker threads:\n', result);
};

await performCalculations();
