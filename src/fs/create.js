import * as fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

export const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname  = path.dirname(__filename);
    fs.open(
        path.join(__dirname,'files','fresh.txt'),
        'ax',
    ).then((f) => {
        f.appendFile('I am fresh and young');
        f.close();
    }).catch((err) => {
        throw new Error('FS operation failed');
    })
};