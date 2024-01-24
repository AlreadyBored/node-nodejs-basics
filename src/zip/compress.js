import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { join } from 'node:path';
const __dirname = import.meta.dirname;

const compress = async () => {
	const gzip = createGunzip();
	pipeline(
		createReadStream(join(__dirname, 'files/fileToCompress.txt')),
		gzip,
		createWriteStream(join(__dirname, 'files/archive.gz')),
		(err) => {
			if (err) {
				console.error('An error occurred:', err);
				process.exitCode = 1;
			}
		},
	)
};

await compress();
