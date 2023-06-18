import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, 'files', 'fileToCompress.txt');
const dist = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
	// Write your code here
	const readStream = fs.createReadStream(source);
	const writeStream = fs.createWriteStream(dist);
	const gzip = zlib.createGzip();

	readStream
		.pipe(gzip)
		.pipe(writeStream)
		.on('finish', () => {
			fs.rmSync(source)
			console.log('Compressed Successfully!');
		});
};

await compress();
