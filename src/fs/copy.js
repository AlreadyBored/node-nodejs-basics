import fs from 'node:fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
	const dir = 'files';
	const dirCopy = `${dir}_copy`;
	const dirPath = join(__dirname, dir);
	const dirCopyPath = join(__dirname, dirCopy);
	const failedMessage = 'FS operation failed';

	try {
		await fs.access(dirPath, fs.F_OK);
	} catch (error) {
		throw new Error(failedMessage);
	}

	try {
		await fs.access(dirCopyPath, fs.F_OK);

		throw new Error(failedMessage);
	} catch (error) {
		if (error.message === failedMessage) {
			throw error;
		}
	}

	await fs.mkdir(dirCopyPath);
    await fs.cp(dirPath, dirCopyPath, { recursive: true });
};

await copy();
