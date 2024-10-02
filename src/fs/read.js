import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);

const read = async () => {
    try {
        const fileForRead = path.join(dirname, 'files', 'fileToRead.txt');
        const content = await fs.readFile(fileForRead, { encoding: 'utf8' });
        console.log(content);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();