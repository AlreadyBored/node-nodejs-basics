import { readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ERROR_MESSAGE = 'FS operation failed'

const list = async () => {
    let pathToDir = join(__dirname, 'files');

    try {
        const dir = await readdir(pathToDir);
        console.log(dir);
    } catch (err) {
        throw new Error(ERROR_MESSAGE);
    }
};

await list();