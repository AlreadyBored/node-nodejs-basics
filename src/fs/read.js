import { readFile, access } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        await access(filePath);

        const data = await readFile(filePath, 'utf8');
        console.log(data);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();