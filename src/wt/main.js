import { Worker} from 'worker_threads';
import {cpus} from 'os'

const promiseWorker = (workerData) => {
	return new Promise((resolve) => {
		const worker = new Worker('./worker.js', {
			workerData,
		});
		console.log('worker: ', worker);
		worker.on('message', result => {
			resolve({state: 'resolved', data: result})
		});
		worker.on('error', () => {
			resolve({state: 'error', data: null})
		});
	})
}

const performCalculations = async () => {
	const cpusNumber = cpus().length;
	const res = [];

	for (let id = 0; id < cpusNumber; id++) {
		res.push(promiseWorker(id + 10));
	};

	return Promise.all(res.map((worker) => worker));
};

console.log(await performCalculations());