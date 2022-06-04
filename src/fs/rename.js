import * as fs from 'fs';
import  * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const rename = async () => {
    const wrongFileName = 'wrongFilename.txt';
    const pathToWrongFileName = path.join(__dirname, '/files', wrongFileName);

    fs.access(pathToWrongFileName, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(`file "${pathToWrongFileName}" does not exist`);
            throw new Error('FS operation failed');
        }
    });

    const properFileName = 'properFilename.md';
    const pathToProperFileName = path.join(__dirname, '/files', properFileName);

    fs.access(pathToProperFileName, fs.constants.F_OK, (err) => {
        if (!err) {
            console.log(`file "${pathToProperFileName}" already exists`);
            throw new Error('FS operation failed');
        }
    });

    fs.rename(
        pathToWrongFileName,
        pathToProperFileName,
        err => {
            if (err) throw err
        }
    );

    // Write your code here
};

rename();
