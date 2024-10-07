import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const readPath = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        await fs.access(readPath);
        const content = await fs.readFile(readPath, 'utf-8');
        console.log(content);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('FS operation failed');
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await read();
