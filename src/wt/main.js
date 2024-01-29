import os from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
	const initialNumber = 10;
	const cpuCoresNumber = os.cpus().length;
	const result = [];

	for (let i = 0; i < cpuCoresNumber; i++) {
		const worker = new Worker('./worker.js');
		worker.postMessage({number: initialNumber + i});
		worker.on('message', (msg) => {
			result.push(`status - resolved, data - ${msg}`);
			console.log(`status - resolved, data - ${msg}`); // something wrong with array, just put result into console as a string
		});
		worker.on('error', () => {
			result.push({status: 'error', data: null}); // something wrong with array, just put result into console as a string
			console.log(`status - error, data - null`);
		});
	}
};

await performCalculations();