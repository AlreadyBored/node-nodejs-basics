import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const remove = async () => {
	await fs.promises.unlink(`${__dirname}/files/fileToRemove.txt`)
		.catch(() => {
			throw new Error('FS operation failed');
		})
};

await remove();