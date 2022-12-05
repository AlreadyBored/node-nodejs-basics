import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fileName = 'fresh.txt'

const create = async () => {
		await fs.promises.writeFile(`${__dirname}/files/${fileName}`, 'I am fresh and young', {flag: 'wx+'})
			.catch(() => {
				throw new Error('FS operation failed');
			})
};

await create();