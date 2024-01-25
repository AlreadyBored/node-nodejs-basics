import { promises as fsPromises } from 'fs';
import fs from 'fs';

const filesDir = 'src/fs/files';
const fileName = 'fileToRemove.txt';

const remove = async () => {
	const filePath = `${ filesDir }/${ fileName }`;
	if (!fs.existsSync(filePath)) {
		throw new Error('FS operation failed');
	}

	await fsPromises.unlink(filePath);
};

await remove();
