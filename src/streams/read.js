import { createReadStream } from 'fs';
import { join } from 'path';

const read = async () => {
	const filePath = join(import.meta.dirname, 'files', 'fileToRead.txt');
	const readStream = createReadStream(filePath);

	readStream.pipe(process.stdout)
	readStream.on('error', (err) => {
		console.error('[Error]', err);
	})
};

await read();
