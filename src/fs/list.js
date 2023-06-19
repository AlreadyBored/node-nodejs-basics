import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
	// Write your code here
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	const pathFolder = path.join(__dirname, 'files');
	if (!fs.existsSync(pathFolder)) {
		throw new Error('FS operation failed. "files" folder does not exist.');
	}
	const fileNames = fs.readdirSync(pathFolder);
	console.log(fileNames);
};

await list();
