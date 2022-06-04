import * as fs from 'fs';
import  * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const list = async () => {
    const pathToSourceDir = path.join(__dirname, '/files');

    fs.access(pathToSourceDir, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(`The directory "${pathToSourceDir}" does not exists`);
            throw new Error('FS operation failed');
        }
    });

    fs.readdir(pathToSourceDir, (err, files) => {
        if (err) throw err;
        console.log(files);
    });
};

list();
