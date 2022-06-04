import fs from 'fs';
import path from 'path';
import { errorMessage, fsFilePath } from '../common/constants.js';

export const read = async () => {
    fs.readFile(
        path.join(fsFilePath, 'files/fileToRead.txt'),
        'utf-8',
        (err, data) => {
        if(err) throw new Error(errorMessage);
        console.log(data);
    })
};

read()