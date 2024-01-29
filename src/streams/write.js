import fs, { createReadStream, createWriteStream } from 'fs';
import { dirname } from 'path';
import { URL } from 'url';
import { stdin } from 'process';


const write = async () => {
	try {
		const __filename = new URL('./files/fileToWrite.txt', import.meta.url).pathname;
		const __dirname = dirname(__filename);

		const isDirExists = fs.existsSync(__dirname);

		if (!isDirExists) {
			throw new Error('Error: no such directory');
		}

		const isFileExists = fs.existsSync(__filename);

		if (!isFileExists) {
			throw new Error('Error: no such file');
		}

		const input = createWriteStream(__filename);
		stdin.pipe(input);
	} catch (error) {
		console.error(error.message)
	}
};

await write();