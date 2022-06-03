import * as fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

export const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname  = path.dirname(__filename);
    fs.cp(
        path.join(__dirname,'files'),
        path.join(__dirname,'files_copy'),
        {
            errorOnExist: true,
            recursive: true,
            force: false,
        }
    ).catch((err) => {
        throw new Error('FS operation failed');
    })
};