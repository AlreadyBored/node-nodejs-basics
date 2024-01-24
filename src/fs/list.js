import fs from 'node:fs/promises';
import { join } from 'path';

const __dirname = import.meta.dirname;

const list = async () => {
	const dir = 'files';
	const dirPath = join(__dirname, dir);
	const failedMessage = 'FS operation failed';

	try {
		await fs.access(dirPath, fs.F_OK);
	} catch (error) {
		throw new Error(failedMessage);
	}

    const files = await fs.readdir(dirPath, { recursive: true });
	console.log(files);
};

await list();
