import fs from 'node:fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
	const fileName = 'files/fresh.txt';
	const content = 'I am fresh and young';
	const path = join(__dirname, fileName);
	const failedMessage = 'FS operation failed';

	try {
		await fs.access(path, fs.F_OK);
		throw new Error(failedMessage);
	} catch (error) {
		if (error.message === failedMessage) {
			throw error;
		}
	}

    await fs.appendFile(path, content);
};

await create();
