import fs, { createReadStream } from 'fs';
import { dirname } from 'path';
import { URL } from 'url';
import { stdout } from 'process';
const { createHash } = await import('crypto');


const calculateHash = async () => {
	try {
		const __filename = new URL('./files/fileToCalculateHashFor.txt', import.meta.url).pathname;
		const __dirname = dirname(__filename);
		const hash = createHash('sha256');

		const isDirExists = fs.existsSync(__dirname);

		if (!isDirExists) {
			throw new Error('Error: no such directory');
		}

		const isFileExists = fs.existsSync(__filename);

		if (!isFileExists) {
			throw new Error('Error: no such file');
		}

		const input = createReadStream(__filename);
		input.pipe(hash).setEncoding('hex').pipe(stdout);
	} catch (error) {
		console.error(error.message);
	}
};

await calculateHash();