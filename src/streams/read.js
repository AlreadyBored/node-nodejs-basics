const { stdout } = process;
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { createReadStream } from 'fs';

const read = async () => {
	const readStream = createReadStream(join(__dirname, 'files', 'fileToRead.txt'));
	readStream.on('data', chunk => stdout.write(chunk));
};

await read();
