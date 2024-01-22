import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
	const writeStream = createWriteStream(filePath, { flags: 'a' }); // 'a' - append (old context will be saved)

	await pipeline(process.stdin, writeStream);

	// or simply use process.stdin.pipe(writeStream);
};

await write();
