const parseArgs = () => {
	console.log("Parsing command line arguments...");
	const args = process.argv.slice(2); // Excludes node path and script path >> focusing only on the arguments provided to our script

	// Iteration through all and printing as required
	for (let i = 0; i < args.length; i += 2) {
		const propName = args[i].slice(2); // Remove leading '--'
		const value = args[i + 1];
		console.log(`${propName} is ${value}`);
	}
};

parseArgs();

/* args.js - implement function that parses command line arguments
 * (given in format --propName value --prop2Name value2,
 * you don't need to validate it) and prints them to the console in the format
 * propName is value, prop2Name is value2 */
