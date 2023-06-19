import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
	// Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

	const pathFolder = path.join(__dirname, 'files');
	const pathFile = path.join(pathFolder, 'fresh.txt');
	const contentFile = 'I am fresh and young';

	if (fs.existsSync(pathFile)) {
		throw new Error('FS operation failed: File already exists');
	}

	try {
		fs.writeFileSync(pathFile, contentFile);
		console.log('fresh.txt file created successfully!');
	} catch (error) {
		throw new Error(`FS operation failed: ${error.message}`);
	}
};

await create();
