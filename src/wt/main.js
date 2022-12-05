import { Worker } from 'worker_threads';
import * as os from 'os';

const performCalculations = async () => {
	let answer = [];
	os.cpus().forEach((_, i) => {
		let worker = new Worker('./worker.js', { workerData: 10 + i });
		answer.push(
			new Promise(resolve => {
				worker.on('message', obj => {
					resolve((answer[i] = obj));
				});
				worker.on('error', () => {
					resolve((answer[i] = { status: 'error', data: null }));
				});
			})
		);
	});

	console.log(await Promise.all(answer));
};

await performCalculations();
