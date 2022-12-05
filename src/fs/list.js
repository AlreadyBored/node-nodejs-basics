import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const list = async () => {
	const files = await fs.promises.readdir(`${__dirname}/files`)
		.catch(() => {
			throw new Error('FS operation failed');
		})
	await files.forEach(file => {
		console.log(file)
	})
};

await list();