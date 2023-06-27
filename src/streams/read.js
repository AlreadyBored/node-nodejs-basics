import { createReadStream } from 'fs'; // module to create a readable stream for reading the file

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url); // convert the file URL to a file path
const __dirname = dirname(__filename);

const read = async () => {
	const filePath = join(__dirname, 'files', 'fileToRead.txt');
	const readStream = createReadStream(filePath);

	try {
		// listen for 'data' event to read chunks of data
		readStream.on('data', (chunk) => {
			// Convert the chunk to a string and print it to the console
			process.stdout.write(chunk.toString());
		});
	} catch (err) {
		console.error('Error:', err);
	}

	/* 
	or implement via pipeline, but: import { pipeline } from 'stream/promises';
	 solution: await pipeline(createReadStream(filePath), process.stdout); 
	*/
};

await read();
