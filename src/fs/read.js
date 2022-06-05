import {join, dirname} from "path";
import {fileURLToPath} from 'url';
import {readFile} from 'fs';

export const read = async () => {
    const file_read_name = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');
    readFile(file_read_name, (err,data) => {
        if (err) {
            throw new Error("FS operation failed");
        } else {
            console.log(data.toString());
        }
    })
};

read();
