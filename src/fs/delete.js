import fs from 'fs';
import path from 'path';
import { errorMessage, fsFilePath } from '../common/constants.js';

export const remove = async () => {
    fs.rm(
        path.join(fsFilePath, 'files/fileToRemove.txt'),
        (err) => {
        if(err) throw new Error(errorMessage);
    })    
};

remove()