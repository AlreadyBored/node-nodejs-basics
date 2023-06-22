import { createReadStream } from 'fs'; // module to create a readable stream for reading the file
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the current file path and directory path
const __filename = fileURLToPath(import.meta.url); // convert the file URL to a file path
const __dirname = dirname(__filename);

const read = async () => {
	try {
		// Create a readable stream to read the file
		const filePath = join(__dirname, 'files', 'fileToRead.txt'); //  construct the file path
		const stream = createReadStream(filePath);

		// Listen for 'data' event to read chunks of data
		stream.on('data', (chunk) => {
			// Convert the chunk to a string and print it to the console
			process.stdout.write(chunk.toString());
		});

		// Listen for 'end' event to know when reading is complete
		stream.on('end', () => {
			console.log('  - Reading complete.');
		});

		// Listen for 'error' event in case there is an error reading the file
		stream.on('error', (error) => {
			console.error('Error reading file:', error);
		});
	} catch (error) {
		console.error('Error:', error);
	}
};

// to exequte the cod I useed command 'node --experimental-modules read.js'

await read();
