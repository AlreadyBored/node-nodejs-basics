import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// get the current file's path and directory using 'import.meta.url' and 'fileURLToPath'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to compress the file
const compress = async () => {
	// resolve the input and output file paths
	const inputFilePath = resolve(__dirname, 'files/fileToCompress.txt');
	const outputFilePath = resolve(__dirname, 'archive.gz');

	// create read and write streams for file operations
	const readStream = createReadStream(inputFilePath);
	const writeStream = createWriteStream(outputFilePath);

	// create a gzip transform stream
	const gzip = createGzip();

	// pipe the read stream through the gzip transform stream and then to the write stream
	readStream.pipe(gzip).pipe(writeStream);

	// wait for the write stream to finish writing
	await new Promise((resolve, reject) => {
		writeStream.on('finish', resolve);
		writeStream.on('error', reject);
	});

	console.log('File has been compressed!');
};

// to che4k the cod I entered in the terminal: node --experimental-modules compress.js

await compress();
