import { Worker } from 'node:worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fileDir = path.join(__dirname, 'worker.js');

const threads = new Map();
const results = new Map();

const onExit = (workerId) => {
	threads.delete(workerId);
	if (threads.size === 0) {
		const keys = [...results.keys()].sort();
		const resultsForPrinting = keys.reduce((previousValue, key) => [...previousValue, results.get(key)], []);
		console.log(resultsForPrinting);
	}
};

const handleResult = (workerId, result) => {
	results.set(workerId, result);
};

const createWorker = (workerId, workerData) => {
	const worker = new Worker(fileDir, { workerData });
	worker.on('message', (message) => handleResult(workerId, message));
	worker.on('error', (error) => {
		const res = {
			status: 'error',
			data: null,
		};
		handleResult(workerId, res);
	});
	worker.on('exit', () => onExit(workerId));
	return worker;
};

const performCalculations = async () => {
	const threadCount = os.cpus().length;
	const offset = 10;

	for (let i = 0; i < threadCount; i++) {
		const worker = createWorker(i, { n: offset + i });
		threads.set(i, worker);
	}
};

await performCalculations();
