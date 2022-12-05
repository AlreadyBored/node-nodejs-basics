import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const current = `${__dirname}/files`
const target = `${__dirname}/files-copy`

const copy = async () => {
	await fs.promises.mkdir(target)
		.catch(() => {
		throw new Error('FS operation failed')
	})
	const files = await fs.promises.readdir(current)

	await files.forEach(file => {
		fs.promises.copyFile(`${current}/${file}`, `${target}/${file}`, fs.constants.COPYFILE_EXCL)
			.catch(() => {
				throw new Error('FS operation failed')
			})
	})
};

await copy();
