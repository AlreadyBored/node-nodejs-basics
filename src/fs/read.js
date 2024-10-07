import { access, readFile } from 'fs/promises'
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        await access(filePath);
        const data = await readFile(filePath, { encoding: 'utf8' });
        console.log(data);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();