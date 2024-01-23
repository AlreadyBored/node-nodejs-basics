import fs from 'node:fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
	const fileName = 'files/fileToRead.txt';
	const path = join(__dirname, fileName);
	const failedMessage = 'FS operation failed';

	try {
		await fs.access(path, fs.F_OK);
	} catch (error) {
		throw new Error(failedMessage);
	}

    const data = await fs.readFile(path, { encoding: 'utf8' });
	console.log(data);
};

await read();
