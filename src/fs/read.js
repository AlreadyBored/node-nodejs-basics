import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path';
import { readFile, access, constants } from 'node:fs/promises'

const read = async () => {
    const errorMessage = 'FS operation failed';
    const fileToReadPath = '/files/fileToRead.txt';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    try {
        await access(`${__dirname}${fileToReadPath}`, constants.R_OK);
    } catch {
        throw new Error(errorMessage);
    }

    try {
        const contents = await readFile(`${__dirname}${fileToReadPath}`, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        throw new Error(errorMessage);
    }
};

await read();