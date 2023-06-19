import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
	const sourceFolder = join(__dirname, 'files');

	try {
		await fs.access(sourceFolder); // Check if source folder exists
	} catch (error) {
		console.error('FS operation failed');
		return; // Return early to avoid further execution
	}

	try {
		const files = await fs.readdir(sourceFolder);
		const filenames = files.map((file) => file);
		console.log(filenames);
	} catch (error) {
		console.error('FS operation failed');
	}
};

await list();
