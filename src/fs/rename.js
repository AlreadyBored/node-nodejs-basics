import * as fs from 'fs';
import  * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const rename = async (pathToWrongFileName, pathToProperFileName) => {

    fs.access(pathToWrongFileName, fs.constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });

    fs.access(pathToProperFileName, fs.constants.F_OK, (err) => {
        if (!err) {
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

// rename();
