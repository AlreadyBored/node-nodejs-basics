import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readLine from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const target = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
	// Write your code here
	const output = fs.createWriteStream(target, {
		flags: 'w',
		encoding: 'utf-8',
	});

	const input = readLine.createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: '--Enter text here:\n--Enter exit to finish.\n',
	});

	input.prompt();

	input
		.on('line', (line) => {
			if (line.trim() == 'exit') input.close();
			else output.write(line + '\n');
		})
		.on('close', () => {
			output.end();
		});
};

await write();
