import { promises as fs } from 'fs';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
	const filePath = join(__dirname, 'files', 'fileToRemove.txt');

	try {
		await fs.rm(filePath); // or might be await fs.unlink(filePath);
		console.log('File was deleted!\n');
	} catch (err) {
		console.log(err);
		throw new Error('FS operation failed\n');
	}
};

await remove();
