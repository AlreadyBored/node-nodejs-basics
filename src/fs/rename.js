import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fileNameToRenameDir = path.join(__dirname, 'files/wrongFilename.txt');
const updatedFileNameDir = path.join(__dirname, 'files/properFilename.md');

const rename = async () => {
	if (!fs.existsSync(fileNameToRenameDir)) {
		throw new Error('FS operation failed');
	}

	fs.renameSync(fileNameToRenameDir, updatedFileNameDir);
};

await rename();
