import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

export const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);

export const read = async () => {
    try{
        const data = await fs.readFile(path.join(dirname, 'files', 'fileToRead.txt'),  { encoding: 'utf8'});
        console.log(data);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();