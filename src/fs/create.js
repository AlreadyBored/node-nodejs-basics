import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ERROR_MESSAGE = 'FS operation failed';
const TEXT = 'I am fresh and young';

const create = async () => {
    let pathToFile = join(__dirname, '/files/fresh.txt');

    try {
        await writeFile(pathToFile, TEXT, {flag: 'wx'});
    } catch(err){
        throw new Error(ERROR_MESSAGE);
    }
};

await create();