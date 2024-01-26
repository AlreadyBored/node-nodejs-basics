import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const filesDir = path.join(__dirname, 'files/fileToCompress.txt');
const archiveDir = path.join(__dirname, 'archive.gz');

const compress = async () => {
	const gzip = zlib.createGzip();
	const inputStream = fs.createReadStream(filesDir);
	const outputStream = fs.createWriteStream(archiveDir);

	inputStream
		.pipe(gzip)
		.pipe(outputStream);
};

await compress();
