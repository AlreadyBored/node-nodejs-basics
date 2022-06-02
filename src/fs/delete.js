import fs from "fs";
import * as path from "path";
import FileError from "./exceptions/fileError.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const remove = async () => {
    let deleteFilePath = path.resolve(__dirname, 'files/fileToRemove.txt');

    //if file we try to rename to exists - trowing exception
    fs.access(deleteFilePath, fs.constants.F_OK,(err) => {
        if(err) throw new FileError('FS operation failed.');
    });

    fs.unlink(deleteFilePath, function(err) {
        if ( err ) throw new FileError(err.message)
    });
};

remove();