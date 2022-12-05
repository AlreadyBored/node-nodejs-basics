import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const __filename = fileURLToPath(import.meta.url);
const __workerFile = path.dirname(__filename) + '/worker.js';

const CORE_NUMBERS = cpus().length;

const createWorker = (coreNumber) => {
	return new Promise((resolve, reject) => {
		const worker = new Worker(__workerFile, {
			workerData: coreNumber
		})

		worker.on('message', (message) => {
			resolve({status:'resolved', data:message});
		})

		worker.on('error', (error) => {
			resolve({status:'error', data:null});
		})
	})
}

const performCalculations = async () => {
    const workersArray = [];

	for(let i = 1; i <= CORE_NUMBERS; i++){
		workersArray.push(createWorker(i + 9));
	}

	await Promise.all(workersArray)
		.then(result => {
			console.log(result);
		})
		.catch(error => {
			console.error(error);
		});
};

await performCalculations();