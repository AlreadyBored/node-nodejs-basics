import * as fs from 'fs';
import  * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const read = async () => {
    const fileName = 'fileToRead.txt';
    const pathToReadFile = path.join(__dirname, '/files', fileName);

    fs.access(pathToReadFile, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(`file "${pathToReadFile}" does not exist`);
            throw new Error('FS operation failed');
        }
    });

    const readableStream = fs.createReadStream(pathToReadFile, 'utf-8');
    readableStream.on('data', chunk => console.log(chunk));
};

read();
