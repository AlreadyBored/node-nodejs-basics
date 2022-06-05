import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filesPath = path.join(__dirname, 'files');

export const list = async () => {
    fs.readdir(filesPath, (err, files) => {
        if (err) {
            throw Error('FS operation failed');
        }

        console.log(files);
    });
};