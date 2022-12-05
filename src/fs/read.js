import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    // Write your code here 
    const pathToReadFile = `${__dirname}/files/fileToRead.txt`;
    const prReadFile = promisify(fs.readFile);

    try {
        const data = await prReadFile(pathToReadFile, 'utf-8');
        console.log(data);
    }
    catch(err) {
        throw new Error('FS operation failed')
    }
};

await read();