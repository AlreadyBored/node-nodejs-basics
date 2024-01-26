import { promises as fsPromises } from 'fs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const filesDir = path.join(__dirname, 'files/fileToRemove.txt');

const remove = async () => {
	if (!fs.existsSync(filesDir)) {
		throw new Error('FS operation failed');
	}

	await fsPromises.unlink(filesDir);
};

await remove();
