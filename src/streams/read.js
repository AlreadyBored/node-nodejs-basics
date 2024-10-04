
import { promises as fs, createReadStream } from 'fs';
import path from 'path';
import { EOL } from 'os';

import { getDirPath } from '../utils/getDirPath.js';


const read = async () => {
    const dirPath = getDirPath(import.meta.url);
    const filePath = path.join(dirPath, 'files', 'fileToRead.txt');

    const readableStream = createReadStream(filePath);
    readableStream.pipe(process.stdout);
    readableStream
        .on('end', () => {
            process.stdout.write(EOL);
        })
        .on('error', (err) => {
            console.error(`Error occured while reading file: ${err.message}`);
        });
};

await read();