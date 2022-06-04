import fs from 'fs';
import path from 'path';
import { errorMessage, fsFilePath } from '../common/constants.js';

export const copy = async () => {
    fs.readdir(
        path.join(fsFilePath, 'files'),
        (err, files) => {
        if(err) throw new Error(errorMessage);

        fs.mkdir(
            path.join(fsFilePath, 'files_copy'),
            (err) => {
            if(err) throw new Error(errorMessage);

            files.forEach((file) => {
                fs.copyFile(
                    path.join(fsFilePath, 'files', file),
                    path.join(fsFilePath, 'files_copy', file),
                    (err) => {
                    if(err) throw new Error(errorMessage);
                })
            })
        })
    })
};

copy()