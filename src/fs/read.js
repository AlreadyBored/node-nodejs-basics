import fs from "fs/promises";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    fs.readFile(file, {encoding:'utf8'}).then((data) => {
        console.log(data);
    }).catch(() => {
        throw new Error('FS operation failed');
    });
};

await read();