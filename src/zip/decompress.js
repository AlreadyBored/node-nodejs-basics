import { createWriteStream, createReadStream } from 'fs';
import { createGunzip } from 'zlib';
import { join } from 'path';
import { pipeline } from 'node:stream/promises';

const decompress = async () => {
	const gunzip = createGunzip();
	const source = join(import.meta.dirname, 'files', 'archive.gz');
	const destination = join(import.meta.dirname, 'files', 'fileToCompress.txt');
	const readStream = createReadStream(source);
	const writeStream = createWriteStream(destination);

	try {
		await pipeline(readStream, gunzip, writeStream);
		console.log('File decompressed successfully');
	} catch (err) {
		console.error('An error occurred:', err);
	}
};

await decompress();
