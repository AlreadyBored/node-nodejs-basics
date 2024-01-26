import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompressedFilesDir = path.join(__dirname, 'files/fileToCompress-decompressed.txt');
const archiveDir = path.join(__dirname, 'archive.gz');

const decompress = async () => {
	const unzip = zlib.createUnzip();
	const inputStream = fs.createReadStream(archiveDir);
	const outputStream = fs.createWriteStream(decompressedFilesDir);

	inputStream
		.pipe(unzip)
		.pipe(outputStream);
};

await decompress();
