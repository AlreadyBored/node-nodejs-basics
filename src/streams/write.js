import fs from 'fs';
import readline from 'readline';

const filePath = 'src/streams/files/fileToWrite.txt';

const write = async () => {
	const txtStream = fs.createWriteStream(filePath);

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
