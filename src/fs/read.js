import * as fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname  = path.dirname(__filename);
    fs.readFile(
        path.join(__dirname,'files','fileToRead.txt'),
        "utf8"
    ).then(
        (data) => {console.log(data);}
    ).catch(
        (err) => {throw new Error('FS operation failed');}
    )
};