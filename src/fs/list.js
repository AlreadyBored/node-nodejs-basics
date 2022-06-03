import * as fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

export const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname  = path.dirname(__filename);
    fs.readdir(
        path.join(__dirname,'files')
    ).then(
        (files) => {console.log(files);}
    ).catch(
        (err) => {throw new Error('FS operation failed');}
    )
};