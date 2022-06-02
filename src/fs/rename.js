import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from "fs";
import * as path from "path";
import FileError from "./exceptions/fileError.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const rename = async () => {
    let renameFrom = path.resolve(__dirname, 'files/wrongFilename.txt'),
        renameTo = path.resolve(__dirname, 'files/properFilename.md');

    //if file we try to rename from doesn't exist - trowing exception
    fs.access(renameFrom, fs.constants.F_OK,(err) => {
        if(err) throw new FileError('FS operation failed.');
    });

    //if file we try to rename to exists - trowing exception
    fs.access(renameTo, fs.constants.F_OK,(err) => {
        if(!err) throw new FileError('FS operation failed.');
    });

    fs.rename(renameFrom, renameTo, function(err) {
        if ( err ) throw new FileError(err.message)
    });
};

rename();