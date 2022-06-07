import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
    try {
        const data = await fs.readFile(fileToReadPath, { encoding: 'utf8'});
        console.log(data)
    } catch (e) {
        throw Error('FS operation failed');
    } 
};

read();