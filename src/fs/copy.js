import { promises as fs } from 'fs';

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
	const sourceFolder = join(__dirname, 'files');
	const destinationFolder = join(__dirname, 'files_copy');

	try {
		await fs.cp(sourceFolder, destinationFolder, {
			recursive: true, // copy directories recursively
			force: false, // overwrite existing file or directory; the copy operation will ignore errors if set to false and the destination exists
			errorOnExist: true, // when force is false, and the destination exists, throw an error
		});
		console.log('All files copied successfully\n');
	} catch (err) {
		console.log(err);
		throw new Error('FS operation failed\n');
	}
};

await copy();
