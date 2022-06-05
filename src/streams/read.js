import fs from 'fs';
import { fileURLToPath } from 'url';

export const read = async () => {
    // read.js - implement function that reads file fileToRead.txt
    // content using Readable Stream and prints it's content into process.stdout

    const path = (p) => fileURLToPath(new URL(`./${p}`, import.meta.url));

    const readable = fs.createReadStream(path('./files/fileToRead.txt'));

    readable.on('data', (data) => {
        process.stdout.write(data);
    });
};

read();