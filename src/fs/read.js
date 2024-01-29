import { readFile } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from 'node:url';

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const encoding = 'utf8';
    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

    readFile(fileToRead, encoding, (err, file) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            console.log(file);
        }
    })
};

await read();