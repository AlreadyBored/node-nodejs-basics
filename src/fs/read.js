import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    // Write your code here 
    try {
        const content = await fs.readFile(pathToFileToRead, { encoding: 'utf8' });
        console.log(content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();