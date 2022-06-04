import fs from 'fs';
import path from 'path';
import { errorMessage, fsFilePath } from '../common/constants.js';

export const list = async () => {
    fs.readdir(
        path.join(fsFilePath, 'files'),
        (err, files) => {
        if(err) throw new Error(errorMessage);
        console.log(files);
    })
};

list()