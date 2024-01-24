import fs from 'node:fs/promises';
import { join } from 'path';

const __dirname = import.meta.dirname;

const remove = async () => {
    const fileName = 'files/fileToRemove.txt';
	const path = join(__dirname, fileName);
	const failedMessage = 'FS operation failed';

	try {
		await fs.access(path, fs.F_OK);
	} catch (error) {
		throw new Error(failedMessage);
	}

    await fs.rm(path);
};

await remove();
