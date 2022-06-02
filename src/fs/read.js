import fs from "fs";
import * as path from "path";
import FileError from "./exceptions/fileError.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const read = async () => {
    let fileToRead = path.resolve(__dirname, 'files/fileToRead.txt');

    fs.access(fileToRead, fs.constants.F_OK,(err) => {
        if(err) throw new FileError('FS operation failed.');
    });

    fs.readFile(fileToRead, 'utf8', (err, data) => {
        if (err) {
            throw new FileError('FS operation failed.')
        }
        console.log(data);
    });
};

read();