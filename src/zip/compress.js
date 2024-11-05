import { createWriteStream, createReadStream } from 'fs';
import { createGzip } from 'zlib';
import { join } from 'path';
import { pipeline } from 'stream';

const compress = async () => {
	const gzip = createGzip();
	const source = join(import.meta.dirname, 'files', 'fileToCompress.txt');
	const destination = join(import.meta.dirname, 'files', 'archive.gz');
	const readStream = createReadStream(source);
	const writeStream = createWriteStream(destination);

	pipeline(readStream, gzip, writeStream, (err) => {
		if (err) {
			console.error('An error occurred:', err);
			process.exitCode = 1;
		}
	});
};

await compress();
