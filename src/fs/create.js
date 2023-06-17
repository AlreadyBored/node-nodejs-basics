import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILE_PATH = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    try {
        await writeFile(FILE_PATH, 'I am fresh and young', { flag: 'wx' })
    } catch {
        console.log('FS operation failed');
    }
};

await create();