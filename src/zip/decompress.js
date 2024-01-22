import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

// get the current file's path and directory using 'import.meta.url' and 'fileURLToPath'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// resolve the input and output file paths
const inputFilePath = resolve(__dirname, 'files/archive.gz');
const outputFilePath = resolve(__dirname, 'files/fileToCompress.txt');

// create read and write streams for file operations
const readStream = createReadStream(inputFilePath);
const writeStream = createWriteStream(outputFilePath);

const unzipStream = createGunzip(); // create a unzipStream transform stream

const decompress = async () => {
	// pipe the read stream through the unzipStream transform stream and then to the write stream
	readStream.pipe(unzipStream).pipe(writeStream);

	// wait for the write stream to finish writing
	await new Promise((resolve, reject) => {
		writeStream.on('finish', resolve);
		writeStream.on('error', reject);
	});

	console.log('Decompression has been completed!');
};

await decompress();
