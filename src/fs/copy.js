import fs from "fs";
import * as path from "path";
import FileError from "./exceptions/fileError.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const copy = async () => {
    let fromPath = path.resolve(__dirname, 'files'),
        toPath = path.resolve(__dirname, 'files_copy');

    //if source exists and we can read from it - continue
    fs.access(fromPath, (err) => {
        if(err) throw new FileError('FS operation failed. Source doesn\'t exist');
    });

    //if destination exists - throw exception
    fs.access(toPath, (err) => {
        if(!err) throw new FileError('FS operation failed. Destination folder already created.');
    });

    fs.mkdir(toPath, () => {
        fs.readdir(fromPath, (err, files) => {
            if(err) throw new FileError(err);
            files.forEach((file) => {
                fs.copyFile(path.join(fromPath, file), path.join(toPath, file), () => {
                    if(err) throw new FileError(err.message);
                });
            });
        });
    });
};

copy();