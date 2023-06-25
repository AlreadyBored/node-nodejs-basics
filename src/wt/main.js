import os from 'os';

const numCores = os.cpus().length; // get the number of logical CPU cores

const performCalculations = async () => {
	const results = new Array(numCores).fill(null); // create an array to store the results, initialized with null values

	// helper function that takes an id as a parameter and returns a promise
	const calculateResult = (id) => {
		return new Promise((resolve) => {
			const result = id + 10; // here is calculation
			resolve(result); // resolve the promise with the calculated result
		});
	};

	const startCalculations = async () => {
		// loop to iterate over the numCores and perform the calculations for each id
		for (let i = 0; i < numCores; i++) {
			const result = await calculateResult(i); // call the calculateResult function for each id
			results[i] = { status: 'resolved', data: result }; // store the result in the results array at the corresponding index
		}
	};

	await startCalculations(); // start the calculations

	console.log('Results:', results);
};

// I useed to get result a command like: node --experimental-worker main.js

await performCalculations();
