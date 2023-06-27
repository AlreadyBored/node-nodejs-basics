import { promises as fs } from 'fs';

import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
	const filePath = join(__dirname, 'files', 'fresh.txt');
	const fileContent = 'I am fresh and young';

	try {
		await fs.writeFile(filePath, fileContent, { flag: 'wx' }); // 'wx'- open file for writing, but fails, if it does exist
		console.log('File created successfully\n');
	} catch (err) {
		console.log(err);
		throw new Error('FS operation failed\n');
	}
};

await create();
