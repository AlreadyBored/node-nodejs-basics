import { promises as fs, constants } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
	const filePath = join(__dirname, 'files', 'fresh.txt');
	const fileContent = 'I am fresh and young';

	try {
		// check with the constants.F_OK-flag if the file exists
		await fs.access(filePath, constants.F_OK);
		throw new Error('FS operation failed');
	} catch (error) {
		// if the file exists, it throws an error with the code 'ENOENT'
		if (error.code === 'ENOENT') {
			try {
				await fs.writeFile(filePath, fileContent);
				console.log('File created successfully');
			} catch (error) {
				// rethrown if any other error occurs during file creation
				console.error('FS operation failed');
			}
		} else {
			console.error('FS operation failed');
		}
	}
};

await create();
