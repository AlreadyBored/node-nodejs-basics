import { promises as fs } from 'fs';

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
	const sourceFile = join(__dirname, 'files', 'wrongFilename.txt');
	const destinationFile = join(__dirname, 'files', 'properFilename.md');

	try {
		await fs.rename(sourceFile, destinationFile);
		console.log('File renamed successfully\n');
	} catch (err) {
		console.log(err);
		throw new Error('FS operation failed\n');
	}
};

await rename();
