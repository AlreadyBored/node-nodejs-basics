import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
	// Write your code here
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const pathFile = path.join(__dirname, 'files', 'fileToRemove.txt');

	fs.unlink(pathFile, err => {
		if (err) {
			console.error(`Error deleting file: ${err}`);
			throw new Error('FS operation failed');
		}
		console.log('File deleted successfully!');
	});
};

await remove();
