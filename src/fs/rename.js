import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'node:fs';

const rename = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const dirName = dirname(fileName);
    const pathOriginFile = join(dirName, 'files', 'wrongFilename.txt');
    const pathRenameFile = join(dirName, 'files', 'properFilename.md');

    fs.access(pathOriginFile, fs.constants.F_OK, (error) => {
            if (error) {
                throw new Error('FS operation failed');
            }
    });

    fs.access(pathRenameFile, fs.constants.F_OK, (error) => {
        if (error) {
            fs.rename(pathOriginFile, pathRenameFile, () => {})     
        } else {
            throw new Error('FS operation failed');
        }
    });
};

await rename();
