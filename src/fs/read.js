import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
    fs.readFile(fileToReadPath, 'utf8', function(err, data) {
        if (err) {
            throw Error('FS operation failed');
        }

        console.log(data)
      });
};