import * as fs from 'fs';
import  * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const remove = async () => {
    const fileName = 'fileToRemove.txt';
    const pathToReadFile = path.join(__dirname, '/files', fileName);

    fs.access(pathToReadFile, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(`file "${pathToReadFile}" does not exist`);
            throw new Error('FS operation failed');
        }
    });

    fs.unlink(pathToReadFile, (err) => {
        if (err) throw err;
        console.log(`${pathToReadFile} was deleted`);
      });
};

remove();
