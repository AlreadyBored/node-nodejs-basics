import * as fs from 'fs/promises';
import { FsError } from './fs-error.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    const path = `${__dirname}/files/fileToRemove.txt`;
    try {
        await fs.rm(path)
    } catch (e) {
        throw new FsError();
    }
};

await remove();
