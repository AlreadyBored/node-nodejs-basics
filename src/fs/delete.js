import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { unlink } from 'fs';


const remove = async () => {
    const currentFile = fileURLToPath(import.meta.url);
    const currentDir = dirname(currentFile);
    const srcFile = join(currentDir, 'files', 'fileToRemove.txt');

    unlink(srcFile, (err) => {
        if (err) throw new Error('FS operation failed');
    })
};

await remove();