import { dirname, join } from 'path';
import { fileURLToPath } from 'url'
import { readFile } from 'fs';

const read = async () => {
    const currentFile = fileURLToPath(import.meta.url);
    const currentDir = dirname(currentFile);
    const srcFile = join(currentDir, 'files', 'fileToRead.txt');

    readFile(srcFile, 'utf8', (err, data) => {
        if (err) throw new Error('FS operation failed');
        console.log(data);
    })
};

await read();