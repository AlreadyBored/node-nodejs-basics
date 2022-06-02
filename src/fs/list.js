import fs from "fs";
import * as path from "path";
import FileError from "./exceptions/fileError.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const list = async () => {
    let listFolder = path.resolve(__dirname, 'files');

    fs.access(listFolder, (err ) => {
        if(err) throw new FileError('FS operation failed. Folder to list files from doesn\'t exist');
    });

    fs.readdir(listFolder, (err, files) => {
        if(err) throw new FileError(err);
        files.forEach((file) => {
            console.log(file);
        });
    });
};

list();