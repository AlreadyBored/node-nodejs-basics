import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const filesDir = path.join(__dirname, 'files/fileToRead.txt');

const read = async () => {
	if (!fs.existsSync(filesDir)) {
		throw new Error('FS operation failed');
	}

	const fileContent = fs.readFileSync(filesDir).toString();
	console.log(fileContent);
};

await read();
