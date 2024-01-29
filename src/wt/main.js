import os from 'os';

const performCalculations = async () => {
	try {
		const {
			Worker,
			isMainThread,
			parentPort,
			workerData
		} = await import('worker_threads');

		if (isMainThread) {
			const cpuCount = os.cpus().length;
			const workers = [];
			const results = [];

			for (let i = 0; i < cpuCount; i++) {
				const worker = new Worker('./worker.js', {
					workerData: 10 + i
				});
				workers.push(worker);
			}

			return new Promise((resolve, reject) => {
				workers.forEach((worker, index) => {
					worker.on('message', (message) => {
						results.push({
							status: 'resolved',
							data: message
						});
						if (results.length === cpuCount) {
							resolve(results);
						}
					});

					worker.on('error', (error) => {
						results.push({
							status: 'error',
							data: null
						});
						if (results.length === cpuCount) {
							resolve(results);
						}
					});
				});
			});
		}
	} catch (error) {
		console.error('Error:', error.message);
		throw error;
	}
};

await performCalculations();
