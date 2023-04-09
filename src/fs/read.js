import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    try {
        const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
        await fs.access(filePath);
        const fileContent = await fs.readFile(filePath, 'utf8');
        console.log(fileContent);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();
