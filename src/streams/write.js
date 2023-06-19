const { stdin } = process;
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { createWriteStream } from 'fs';

const write = async () => {
	const writeStream = createWriteStream(join(__dirname, 'files', 'fileToWrite.txt'));
	stdin.on('data', data => {
		writeStream.write(data);
	})
};

await write();
