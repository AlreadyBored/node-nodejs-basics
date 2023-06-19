import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs';

const list = async () => {
    const currentFile = fileURLToPath(import.meta.url);
    const currentDir = dirname(currentFile);
    const srcDir = join(currentDir, 'files');

    readdir(srcDir, (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        }

        files.forEach(file => {
            console.log(file);
        })
    })
};

await list();