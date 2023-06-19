import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const parseEnv = async () => {
	try {
		const envVariables = { name1: 'value1', name2: 'value2' }; // define environment variables

		const envFile = join(__dirname, '..', 'cli', 'env.js'); // path to the environment file

		const fileContent = await fs.readFile(envFile, 'utf-8'); // read the content of the file
		const envLines = fileContent.split('\n'); // get content as array with elements key/value on its own line

		// Extract environment variables with the prefix 'RSS_'
		for (const line of envLines) {
			if (line.startsWith('RSS_')) {
				const [name, value] = line.split('='); // arr element key/value separated by '='
				envVariables[name] = value; // set the obj.key due to obj.value
			}
		}

		// Print the environment variables in the specified format
		for (const [name, value] of Object.entries(envVariables)) {
			console.log(`RSS_${name}=${value}`);
		}
	} catch (error) {
		console.error('FS operation failed');
	}
};

await parseEnv();
