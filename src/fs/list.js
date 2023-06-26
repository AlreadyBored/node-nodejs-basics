import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
	const sourceFolder = join(__dirname, 'files');

	// simple variant
	try {
		const fileList = await fs.readdir(sourceFolder);
		console.log(fileList);
	} catch {
		throw new Error('FS operation failed');
	}

	// // more complicated variant
	// try {
	// 	await fs.access(sourceFolder); // Check if source folder exists
	// } catch (error) {
	// 	console.error('FS operation failed');
	// 	return; // Return early to avoid further execution
	// }

	// try {
	// 	const files = await fs.readdir(sourceFolder);
	// 	const filenames = files.map((file) => file);
	// 	console.log(filenames);
	// } catch (error) {
	// 	console.error('FS operation failed');
	// }
};

await list();
