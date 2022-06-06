import { readdir } from 'fs/promises';
import path from 'path';

export const list = async () => {
    const dirname = path.resolve();

    const dirPath = path.join(dirname, 'files');

    try{
        const filesName = await readdir(dirPath);
        console.log(filesName);
    }catch {
        console.error('FS operation failed');
    }

};