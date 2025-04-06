import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'node:fs';

const rename = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const dirName = dirname(fileName);
    const pathOriginFile = join(dirName, 'files', 'wrongFilename.txt');
    const pathRenameFile = join(dirName, 'files', 'properFilename.md');

    if ((!fs.existsSync(pathOriginFile)) || (fs.existsSync(pathRenameFile))) {
        throw new Error('FS operation failed')
    } else {
        fs.rename(pathOriginFile, pathRenameFile, (error) => {
            if (error) {
                throw new Error('FS operation failed')
            }
        }) 
    }
};

await rename();
