import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputFilePath = join(__dirname, 'files', 'fileToCompress.txt');
const outputFilePath = join(__dirname, 'files', 'archive.gz');
// create read and write streams for file operations
const readStream = createReadStream(inputFilePath);
const writeStream = createWriteStream(outputFilePath);

const gzip = createGzip(); // create a gzip transform stream

const compress = async () => {
	// pipe the read stream through the gzip transform stream and then to the write stream
	readStream.pipe(gzip).pipe(writeStream);

	// wait for the write stream to finish writing
	// await new Promise((resolve, reject) => {
	// 	writeStream.on('finish', resolve);
	// 	writeStream.on('error', reject);
	// });

	console.log('File has been compressed!');
};

// to che4k the cod I entered in the terminal: node --experimental-modules compress.js

await compress();
