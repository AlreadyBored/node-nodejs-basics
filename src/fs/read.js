import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    const filePath = join(__dirname, 'files', 'fileToRead.txt');

    try {
        await fs.access(filePath);
        
        const content = await fs.readFile(filePath, 'utf8');
        console.log(content);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();
