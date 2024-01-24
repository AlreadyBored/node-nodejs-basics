import fs, { ReadStream } from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const decompress = async () => {
	// Write your code here
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	const pathFileInput = path.join(__dirname, 'archive.gz');
	const pathFileOutput = path.join(__dirname, 'files', 'fileToCompress.txt');

	const inputFileStream = fs.createReadStream(pathFileInput);
	const outputFileStream = fs.createWriteStream(pathFileOutput);

	const gunzip = zlib.createGunzip();

	inputFileStream
		.pipe(gunzip)
		.pipe(outputFileStream)
		.on('finish', () => {
			console.log('Decompression completed!');
		});
};

await decompress();
