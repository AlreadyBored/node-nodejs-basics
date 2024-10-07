import fs from 'fs';
import path from 'node:path';
import { getDirName } from '../fs/getDir.js';

const read = async () => {
    const filePath = path.join(getDirName(import.meta.url), './files/fileToRead.txt');

    if (!fs.existsSync(filePath)) {
        throw Error('FS operation failed');
    }

    fs.createReadStream(filePath).on('data', (chunk) => {
        console.log(chunk.toString());
    });
};

await read();