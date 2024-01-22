import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
	const filePath = join(__dirname, 'files', 'fileToRead.txt');

	// simple variant
	try {
		const fileContent = await fs.readFile(filePath, 'utf-8');
		console.log(fileContent);
	} catch {
		throw new Error('FS operation failed');
	}

	// // more complicated variant
	// try {
	// 	await fs.access(filePath); // Check file existence
	// } catch (error) {
	// 	console.error('FS operation failed');
	// 	return; // Return early to avoid further execution
	// }

	// try {
	// 	const fileContent = await fs.readFile(filePath, 'utf-8');
	// 	console.log(fileContent);
	// } catch (error) {
	// 	console.error('FS operation failed');
	// }
};

await read();
