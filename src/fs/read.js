import fs from 'fs/promises';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const fileName = 'fileToRead.txt';
    const filePath = path.join(__dirname, 'files', fileName);

    try {
        console.log((await fs.readFile(filePath)).toString())
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();