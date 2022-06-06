import { readFile } from 'fs/promises';
import path from 'path';

export const read = async () => {
    const dirname = path.resolve();

    const filePath = path.join(dirname, 'files', 'fileToRead.txt');

    try {
        const fileData = await readFile(filePath);
        console.log(fileData.toString());
    }catch {
        console.error('FS operation failed');
    }

};

read()