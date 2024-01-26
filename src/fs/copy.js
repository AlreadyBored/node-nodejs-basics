import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const filesDir = path.join(__dirname, 'files');
const filesCopyDir = path.join(__dirname, 'files-copy');

const copy = async () => {
	if (fs.existsSync(filesCopyDir) || !fs.existsSync(filesDir)){
		throw new Error('FS operation failed');
	} else {
		fs.mkdirSync(filesCopyDir);
	}

	fs.readdir(path.join(filesDir), { withFileTypes: true }, (error, files) => {
		files
			.forEach((file) => {
				const filePath = `${ filesDir }/${ file.name }`;
				const distFilePath = `${ filesCopyDir }/${ file.name }`;
				fs.copyFileSync(filePath, distFilePath);
			});
	});
};

await copy();
