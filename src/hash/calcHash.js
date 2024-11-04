import crypto from 'node:crypto';
import { createReadStream } from 'node:fs';
import { join } from 'path';

const calculateHash = async () => {
	const filePath = join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');
	const hash = crypto.createHash('sha256');
	const readStream = createReadStream(filePath);

	readStream.pipe(hash).on('finish', () => {
		console.log(hash.digest('hex'));
	});
	readStream.on('error', (err) => {
		console.error('[Error]', err);
	});
};

await calculateHash();
