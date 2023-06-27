import { promises as fs } from 'fs';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
	const sourceFolder = join(__dirname, 'files');

	try {
		const fileList = await fs.readdir(sourceFolder);
		console.log('The file list is as follow: \n', fileList);
	} catch (err) {
		console.log(err);
		throw new Error('FS operation failed\n');
	}
};

await list();
