import fs from 'node:fs/promises';
import { join } from 'path';

const __dirname = import.meta.dirname;

const rename = async () => {
	const dir = 'files'
    const fileToRename = 'wrongFilename.txt';
    const newFilename = 'properFilename.md';
	const pathFrom = join(__dirname, dir, fileToRename);
	const pathTo = join(__dirname, dir, newFilename);
	const failedMessage = 'FS operation failed';

	try {
		await fs.access(pathFrom, fs.F_OK);
	} catch (error) {
		throw new Error(failedMessage);
	}

	try {
		await fs.access(pathTo, fs.F_OK);
		throw new Error(failedMessage);
	} catch (error) {
		if (error.message === failedMessage) {
			throw error;
		}
	}

	await fs.rename(pathFrom, pathTo);
};

await rename();
