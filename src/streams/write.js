import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
	const __dirname = dirname(fileURLToPath(import.meta.url));

	const output = createWriteStream(join(__dirname, 'files', 'fileToWrite.txt'));
	stdin.pipe(output);
};

await write();
