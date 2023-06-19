import { dirname, join } from 'path';
import { fileURLToPath } from 'url'
import { writeFile, readFile } from 'fs';

const create = async () => {
    const currentFile = fileURLToPath(import.meta.url);
    const currentDir = dirname(currentFile);
    const srcFile = join(currentDir, 'files', 'fresh.txt');

    readFile(srcFile, { encoding: 'utf8'}, (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        }
        writeFile(srcFile, 'I am fresh and young', (err) => {
            if (err) console.log(err);
        });
    });
};

await create();