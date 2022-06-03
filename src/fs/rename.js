import {constants} from 'fs';
import * as fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

export const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname  = path.dirname(__filename);

    fs.access(path.join(__dirname,'files','properFilename.md'),constants.F_OK)
    .then(() => true)
    .catch((err) => false)
    .then((exist) => {
        if(exist) {
            throw new Error('FS operation failed');
        } else {
            fs.rename(
                path.join(__dirname,'files','wrongFilename.txt'),
                path.join(__dirname,'files','properFilename.md'),
            ).catch((err) => {
                throw new Error('FS operation failed');
            })
        }
    });
};