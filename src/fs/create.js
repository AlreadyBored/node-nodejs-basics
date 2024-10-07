import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
    try {
        const content = 'I am fresh and young'
        await writeFile(filePath, content, { flag: 'wx' })
    } catch (err) {
        if (err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
    }
};

await create();