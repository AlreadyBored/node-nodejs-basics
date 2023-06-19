import * as fs from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ERROR_MESSAGE = 'FS operation failed';

const oldPath = join(__dirname, 'files', 'wrongFilename.txt');
const newPath = join(__dirname, 'files', 'properFilename.md');


const rename = async () => {

    try {
        await fs.rename(oldPath, newPath);
    } catch (err) {
        throw new Error(ERROR_MESSAGE);
    }
};

await rename();