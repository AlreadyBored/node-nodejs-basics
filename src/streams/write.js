import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
	// Write your code here
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const pathFile = path.join(__dirname, 'files', 'fileToWrite.txt');
	const writableStream = fs.createWriteStream(pathFile);

	process.stdin.on('data', data => writableStream.write(data));
	process.stdin.on('end', () => writableStream.end());
};

await write();
