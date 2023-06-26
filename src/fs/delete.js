import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
	const filePath = join(__dirname, 'files', 'fileToRemove.txt');

	// simple variant
	try {
		await fs.rm(filePath); // or await fs.unlink(filePath);
		console.log('File was deleted!');
	} catch {
		throw new Error('FS operation failed');
	}

	// // more complicated variant
	// try {
	// 	await fs.access(filePath); // Check if file exists
	// } catch (error) {
	// 	console.error('FS operation failed');
	// 	return;
	// }

	// try {
	// 	await fs.unlink(filePath);
	// 	console.log('File was deleted!');
	// } catch (error) {
	// 	console.error('FS operation failed');
	// }
};

await remove();
