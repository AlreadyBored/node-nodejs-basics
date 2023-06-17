import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DIRECTORY_PATH = path.join(__dirname, 'files')

const list = async () => {
    try {
        const fileNames = await readdir(DIRECTORY_PATH, 'utf-8');
        console.log(fileNames);
    } catch {
        console.log('FS operation failed');
    }
};

await list();