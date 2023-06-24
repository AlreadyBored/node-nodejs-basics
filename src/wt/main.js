import { Worker } from 'worker_threads';

const performCalculations = async () => {
	const worker = new Worker('./worker.js');

	const resultPromise = new Promise((resolve, reject) => {
		worker.on('message', (result) => {
			resolve(result); // resolve the promise with the result received from the worker thread
		});

		worker.on('error', (error) => {
			reject(error); // reject the promise with the error that occurred in the worker thread
		});

		worker.on('exit', (code) => {
			if (code !== 0) {
				reject(new Error(`Worker stopped with exit code ${code}`)); // reject the promise if the worker thread exited with a non-zero code
			}
		});
	});

	try {
		const result = await resultPromise;
		console.log('Result:', result); // log the result received from the worker thread
	} catch (error) {
		console.error('Error:', error); // log any errors that occurred in the worker thread
	}
};

await performCalculations();
