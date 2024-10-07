import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        await fs.access(filePath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }

    const content = await fs.readFile(filePath, 'utf8');
    console.log('File content:');
    console.log(content);

    return content;
};

await read();