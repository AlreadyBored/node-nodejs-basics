import { access, readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const fileToRead = join(__dirname,'files', 'fileToRead.txt');

    try {
        await access(fileToRead);
        const content = await readFile(fileToRead, { encoding: 'utf8' });
        console.log(content);
    }
    catch (error) {
        throw new Error('FS operation failed');
    }
    // Write your code here 
};

await read();