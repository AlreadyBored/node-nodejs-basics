import * as fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

export const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname  = path.dirname(__filename);
    fs.rm(
        path.join(__dirname,'files','fileToRemove.txt')
    ).catch((err) => {
        throw new Error('FS operation failed');
    })
};