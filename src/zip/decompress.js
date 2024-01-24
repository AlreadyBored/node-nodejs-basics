import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import { join } from 'node:path';
const __dirname = import.meta.dirname;

const decompress = async () => {
	const unzip = createUnzip();
	pipeline(
		createReadStream(join(__dirname, 'files/archive.gz')),
		unzip,
		createWriteStream(join(__dirname, 'files/fileToCompress.txt')),
		(err) => {
			if (err) {
				console.error('An error occurred:', err);
				process.exitCode = 1;
			}
		},
	)
};

await decompress();
