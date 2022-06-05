import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
     fs.readFile(filePath, 'utf8', (err, data) => {
        if(err) throw ('FS operation failed');
        console.log(data);
    });
};

read();
