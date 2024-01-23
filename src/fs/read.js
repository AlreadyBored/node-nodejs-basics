import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ERROR_MESSAGE = 'FS operation failed';

const read = async () => {
    let pathToFile = join(__dirname, 'files', 'fileToRead.txt');

    try {
        let content = await readFile(pathToFile, { encoding: 'utf8' });
        console.log(content);
    } catch (err) {
        throw new Error(ERROR_MESSAGE);
    }
};

await read();