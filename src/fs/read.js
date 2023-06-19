import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
	// Write your code here
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const pathFile = path.join(__dirname, 'files', 'fileToRead.txt');

	fs.readFile(pathFile, 'utf-8', (err, data) => {
		if (err) {
			throw new Error('FS operation failed.');
		} else {
			console.log(data);
		}
	});
};

await read();
