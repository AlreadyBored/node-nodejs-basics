import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { folderName } from '../constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, folderName, 'fileToRead.txt');

export const read = async () => {
    let fileData = '';
    createReadStream(pathToFile, 'utf-8')
        .on('data', chunk => fileData += chunk)
        .on('end', () => process.stdout.write(fileData))
        .on('error', err => console.error(err.message));
};

read();