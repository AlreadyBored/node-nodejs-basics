import { parentPort, workerData } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (n) => {
	const data = nthFibonacci(n);
	parentPort.postMessage({
		status: 'resolved',
		data,
	});
};

sendResult(workerData.n);
