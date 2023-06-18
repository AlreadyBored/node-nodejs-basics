import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
	const sourceFile = join(__dirname, 'files', 'wrongFilename.txt');
	const destinationFile = join(__dirname, 'files', 'properFilename.md');

	try {
		await fs.access(sourceFile); // Check if source file exists

		try {
			await fs.access(destinationFile); // Check if destination file already exists
			throw new Error('FS operation failed');
		} catch (error) {
			if (error.code === 'ENOENT') {
				// Destination file does not exist, proceed with renaming
				await fs.rename(sourceFile, destinationFile);
				console.log('File renamed successfully');
			} else {
				throw error; // Rethrow other errors
			}
		}
	} catch (error) {
		console.error('FS operation failed');
	}
};

rename();
