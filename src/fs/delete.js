import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILE_PATH = path.join(__dirname, 'files', 'fileToRemove.txt')

const remove = async () => {
    try {
        await rm(FILE_PATH)
    } catch {
        console.log('FS operation failed');
    }
};

await remove();