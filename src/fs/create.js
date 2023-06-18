import { mkdir } from 'fs/promises';
import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { isExists } from '../utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
	const filesFolderPath = join(__dirname, 'files');
	const filePath = join(filesFolderPath, 'fresh.txt');
	const text = 'I am fresh and young';

	if (await isExists(filePath)) {
		throw new Error('FS operation failed');
	} else {
		try {
			await mkdir(filesFolderPath, { recursive: true });
			createWriteStream(filePath).end(text);
			console.log('File "fresh.txt" has been created');
		} catch (error) {
			console.log('🚀 ~ create ~ error:', error);
		}
	}
};

await create();