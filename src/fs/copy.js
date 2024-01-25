import fs from 'fs';
import path from 'path';

const filesDir = 'src/fs/files';
const filesCopyDir = 'src/fs/files-copy';

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
