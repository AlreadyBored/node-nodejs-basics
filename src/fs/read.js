import { promises as fs } from 'fs';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
	const filePath = join(__dirname, 'files', 'fileToRead.txt');

	try {
		const fileContent = await fs.readFile(filePath, 'utf-8');
		console.log(fileContent);
	} catch (err) {
		console.log(err);
		throw new Error('FS operation failed\n');
	}
};

await read();
