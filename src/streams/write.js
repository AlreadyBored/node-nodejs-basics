import fs from 'fs';
import readline from 'readline';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fileDir = path.join(__dirname, 'files/fileToWrite.txt');
const write = async () => {
	const txtStream = fs.createWriteStream(fileDir);

	const readlineStream = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	readlineStream.setPrompt('Enter any text: ');
	readlineStream.prompt();

	readlineStream
		.on('line', function (input) {
			txtStream.write(input + '\n');
			readlineStream.prompt();
		});
};

await write();
