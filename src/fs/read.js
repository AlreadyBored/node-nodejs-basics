import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const target = path.join(__dirname, 'files', 'fileToRead.txt');
const err_msg = 'FS operation failed';

const read = async () => {
	// Write your code here
	fs.readFile(target, { encoding: 'utf-8' }, (err, data) => {
		if (err) throw new Error(err_msg);

		console.log(data);
	});
};

await read();
