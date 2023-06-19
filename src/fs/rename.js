import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
	// Write your code here
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);
	const sourceFile = path.join(__dirname, 'files', 'wrongFilename.txt');
	const pathFolder = path.join(__dirname, 'files');
	const targetFile = 'properFilename.md';

	fs.rename(sourceFile, `${pathFolder}/${targetFile}`, err => {
		if (err) {
			console.error(`Error renaming file ${err}`);
			return;
		}
		console.log('File renamed successfully!');
	});
};

await rename();
