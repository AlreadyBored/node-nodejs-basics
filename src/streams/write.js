import fs from 'fs';
import { pipeline } from 'stream';

const write = async () => {
	const stream = fs.createWriteStream('./files/fileToWrite.txt', 'utf8');
	const read = process.stdin;
	pipeline(read, stream, err => {
		if (err) throw new Error('Operation failed');
	});
};

await write();
