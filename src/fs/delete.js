import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToRemovePath = path.join(__dirname, 'files', 'fileToRemove.txt');

export const remove = async () => {
    fs.unlink(fileToRemovePath, err => {
        if (err) {
            throw Error('FS operation failed')
        }
    });
};