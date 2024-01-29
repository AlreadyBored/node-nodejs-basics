const sendResult = async () => {
	try {
		const {
			parentPort,
			workerData
		} = await import('worker_threads');

		const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

		const n = workerData;
		const result = nthFibonacci(n);
		if (parentPort) {
			parentPort.postMessage(result);
		}
	} catch (error) {
		console.error('Error: ', error.message);
	}
};

sendResult();
