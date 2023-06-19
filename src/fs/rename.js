import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFile, writeFile, unlink } from 'fs';

const rename = async () => {
    const currentFile = fileURLToPath(import.meta.url);
    const currentDir = dirname(currentFile);
    const srcDir = join(currentDir, 'files')
    const srcFile = join(srcDir, 'wrongFilename.txt');
    const targetFile = join(srcDir, 'properFilename.md');

    await readFile(srcFile, 'utf8',(err, data) => {
       if (err) throw new Error('FS operation failed');
       writeFile(targetFile, data, (err) => {
           if (err) throw new Error('FS operation failed');
       })
    });

    unlink(srcFile, (err) => {
        if (err) throw new Error('FS operation failed');
    });
};

await rename();