import { createWriteStream, createReadStream } from 'fs';
import { createGzip } from 'zlib';
import { join } from 'path';
import { pipeline } from 'node:stream/promises';

const compress = async () => {
	const gzip = createGzip();
	const source = join(import.meta.dirname, 'files', 'fileToCompress.txt');
	const destination = join(import.meta.dirname, 'files', 'archive.gz');
	const readStream = createReadStream(source);
	const writeStream = createWriteStream(destination);

	try {
		await pipeline(readStream, gzip, writeStream);
		console.log('File compressed successfully');
	} catch (err) {
		console.error('An error occurred:', err);
	}
};

await compress();
