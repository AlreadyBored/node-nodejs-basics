import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const target = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
	// Write your code here
	const stream = fs.createReadStream(target, {
		flag: 'r',
		encoding: 'utf-8',
		highWaterMark: 64,
	});

	stream.on('error', (err) => {
		console.log(err.message);
	});

	stream.on('data', (chunk) => {
		process.stdout.write(chunk);
	});

	stream.on('close', () => {
		process.stdout.write('\n');
	});
};

await read();
