import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const read = async () => {
    let data = await fs.promises.readFile(`${__dirname}/files/fileToRead.txt`, 'utf-8')
	    .catch(() => {
				throw new Error('FS operation failed');
	    })
		await console.log(data)
};

await read();