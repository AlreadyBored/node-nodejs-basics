import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { folderName } from '../constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, folderName, 'fileToWrite.txt');

export const write = async () => {
    const writableStream = createWriteStream(pathToFile);
    process.stdin
        .on('data', data => writableStream.write(data))
        .on('error', err => console.error(err.message));
};

write();