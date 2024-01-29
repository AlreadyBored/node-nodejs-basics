import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';
import { pipeline } from 'node:stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
	await pipeline(
		stdin,
		createWriteStream(join(__dirname, 'files', 'fileToWrite.txt'))
	)
};

await write().catch(console.error);
