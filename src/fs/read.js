import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    fs.readFile(__dirname + '\\files\\fileToRead.txt', 'utf8', (err, data) => {
        if (err?.code === 'ENOENT') {
            throw Error ('FS operation failed');
        } else if (data) {
            console.log(data);            
        }
    });
};

await read();