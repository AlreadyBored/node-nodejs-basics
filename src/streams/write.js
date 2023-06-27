import { createWriteStream } from 'fs';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToWrite.txt');
const writeStream = createWriteStream(filePath); // writable stream to the file

const write = async () => {
	process.stdin.pipe(writeStream);
};

await write();
