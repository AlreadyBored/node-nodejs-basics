import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const parseArgs = async () => {
	try {
		const parsedArgs = {}; // initially sets command line arguments as an empty object then obtaine them from the 'process.argv' array

		const args = process.argv.slice(2); // get 'pure' command line arguments in array, excluding 'node'(as first arg) and the path to the JavaScript 'args.js' (as second arg)

		// Parse command line arguments
		for (let i = 0; i < args.length; i += 2) {
			// The loop variable i is incremented by 2 in each iteration because each argument is expected to have a corresponding value
			const propName = args[i].slice(2); // extract the argument name; Remove leading '--' from argument name
			const propValue = args[i + 1]; // retrieve the argument value. Since the argument value immediately follows the argument name in the args array
			parsedArgs[propName] = propValue; // assign the argument value to the corresponding property in the parsedArgs object
		}

		// print parsed arguments in the specified format
		for (const [propName, propValue] of Object.entries(parsedArgs)) {
			console.log(`${propName} is ${propValue}`);
		}
	} catch (error) {
		console.error('Error parsing command line arguments:', error);
	}
};

await parseArgs();
