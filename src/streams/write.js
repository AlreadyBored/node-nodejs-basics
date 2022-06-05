import fs from 'fs';
import { fileURLToPath } from 'url';

process.stdin.resume();

export const write = async () => {
    // write.js - implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
    const path = (p) => fileURLToPath(new URL(`./${p}`, import.meta.url));

    const writeable = fs.createWriteStream(path('./files/fileToWrite.txt'));

    process.stdin.on('data', (data) => {
        writeable.write(data);
    });
};

write();