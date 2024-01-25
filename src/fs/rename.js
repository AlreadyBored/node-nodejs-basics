import fs from 'fs';

const filesDir = 'src/fs/files';
const fileNameToRename = 'wrongFilename.txt';
const updatedFileName = 'properFilename.md';

const rename = async () => {
	const filePath = `${ filesDir }/${ fileNameToRename }`;
	const renamedFilePath = `${ filesDir }/${ updatedFileName }`;
	if (!fs.existsSync(filePath)) {
		throw new Error('FS operation failed');
	}

	fs.renameSync(filePath, renamedFilePath);
};

await rename();
