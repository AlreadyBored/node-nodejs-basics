import { workerData, parentPort } from 'node:worker_threads';

const STATUS = {
	RESOLVED: 'resolved',
	ERROR: 'error',
}
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
	try {
		const data = nthFibonacci(workerData ?? 1);
		parentPort?.postMessage({ msg: 'RESULT', result: { data, status: STATUS.RESOLVED } });
	} catch (error) {
		parentPort?.postMessage({ msg: 'RESULT', result: { data: null, status: STATUS.ERROR } });
	}
};

sendResult();
