import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
	// Write your code here
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const pathFile = path.join(__dirname, 'files', 'fileToRead.txt');
	const readable = fs.createReadStream(pathFile);
	readable.pipe(process.stdout);
};

await read();
