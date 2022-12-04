import { resolve } from 'path';
import fs from 'fs';

const path = resolve('src', 'streams', 'files', 'fileToWrite.txt');

const write = async () => {
    const writeStream = fs.createWriteStream(path);
    process.stdin.pipe(writeStream)
};

await write();