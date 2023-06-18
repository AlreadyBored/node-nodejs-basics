import { readFile } from 'fs/promises';
import { FsError } from './fs-error.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    try {

        const filePath = `${__dirname}/files/fileToRead.txt`
        const contents = await readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new FsError();
        }
    }
};

await read();
