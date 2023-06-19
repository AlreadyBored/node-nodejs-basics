import { rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ERROR_MESSAGE = 'FS operation failed';

const remove = async () => {
    let pathToFile = join(__dirname, 'files', 'fileToRemove.txt');
    
    try {
        await rm(pathToFile);
    } catch (err) {
        throw new Error(ERROR_MESSAGE);
    }
};

await remove();