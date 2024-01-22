import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToWrite.txt');
const writeStream = createWriteStream(filePath); // writable stream to the file

const write = async () => {
	process.stdin.pipe(writeStream);

	// more complicated variant
	// const writeStream = createWriteStream(filePath); // create a writable stream to the file
	// const inputText = process.argv[2]; // get the input text from command line argument
	// writeStream.write(inputText); // write the input text to the file
	// writeStream.end(); // mark the end of writing
	// return new Promise((resolve, reject) => {
	// 	writeStream.on('finish', () => {
	// 		console.log('Writing complete.'); // when writing is complete, log a message
	// 		resolve();
	// 	});
	// 	writeStream.on('error', (error) => {
	// 		reject(error); // if an error occurs during writing, reject the promise with the error
	// 	});
	// });
};

// to check the code I used comman: node --experimental-modules write.js 'Learn the Node is interesting and the same time complicated process'
await write();
