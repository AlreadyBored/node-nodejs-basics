import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rename = async () => {
	await fs.promises.rename(`${__dirname}/files/wrongFilename.txt`, `${__dirname}/files/properFilename.md`)
		.catch(() => {
			throw new Error('FS operation failed')
		})
};

await rename();