import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'node:fs';
import { cp } from 'node:fs/promises';

const copy = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const dirName = dirname(fileName);
    const sourcePath = join(dirName, 'files');
    const destPath = join(dirName, 'files_copy');

    if ((!fs.existsSync(sourcePath)) || (fs.existsSync(destPath))) {
        throw new Error('FS operation failed')
    } else {
        fs.mkdir(destPath, () => {
            cp(sourcePath, destPath,
                {
                    errorOnExist: true,
                    recursive: true,
                })
        });             
    }
};

await copy();
