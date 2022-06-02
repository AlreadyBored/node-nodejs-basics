import fs from "fs";
import * as path from "path";
import FileError from "./exceptions/fileError.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const create = async () => {
    let filePath = path.resolve(__dirname, 'files/fresh.txt');

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            fs.appendFile(
                filePath,
                'I am fresh and young\r\n',
                 (err) => {
                    if (err) throw new FileError(err.message);
                 }
            );
        }
        else{
            throw new FileError('FS operation failed')
        }
    })
};

create();