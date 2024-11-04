import { createWriteStream } from 'fs';
import { join } from 'path';

const write = async () => {
	const filePath = join(import.meta.dirname, 'files', 'fileToWrite.txt');

	const writeStream = createWriteStream(filePath);

	process.stdin.pipe(writeStream);

	writeStream.on('error', (error) => {
		console.error('[ERROR]:', error);
	});
};

await write();
